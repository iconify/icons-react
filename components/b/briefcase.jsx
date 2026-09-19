import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7lad8bdt.css';
import '../../css/h/h2hrj4bhj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c7lad8bdt"/><path class="h2hrj4bhj"/></g>`,
		"fallback": "heroicons-solid:briefcase",
	});
}

export default Component;

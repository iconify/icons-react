import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2m32f12q.css';
import '../../css/x/x-5wu40ay.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2m32f12q"/><path clip-rule="evenodd" class="x-5wu40ay"/></g>`,
		"fallback": "pepicons-pencil:division",
	});
}

export default Component;

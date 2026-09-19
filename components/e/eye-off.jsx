import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-b80z43t.css';
import '../../css/g/g-ri19eua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h-b80z43t"/><path class="g-ri19eua"/></g>`,
		"fallback": "heroicons-solid:eye-off",
	});
}

export default Component;

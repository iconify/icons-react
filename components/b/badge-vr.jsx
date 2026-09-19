import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h32ym5bol.css';
import '../../css/y/yr9nnujiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h32ym5bol"/><path class="yr9nnujiy"/></g>`,
		"fallback": "bi:badge-vr",
	});
}

export default Component;

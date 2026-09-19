import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hyc4vn_jh.css';
import '../../css/o/opt9n97qr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hyc4vn_jh"/><path class="opt9n97qr"/></g>`,
		"fallback": "pepicons:cup",
	});
}

export default Component;

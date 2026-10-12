import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ip-119bfy.css';
import '../../css/q/qfe1lszgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ip-119bfy"/><path class="qfe1lszgr"/></g>`,
		"fallback": "andrsrxn:heart-filled",
	});
}

export default Component;

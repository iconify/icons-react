import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jx_isobmu.css';
import '../../css/r/rsakbsbbr.css';
import '../../css/l/lr8sivbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jx_isobmu"/><path class="rsakbsbbr"/><path class="lr8sivbky"/></g>`,
		"fallback": "solar:earth-bold",
	});
}

export default Component;

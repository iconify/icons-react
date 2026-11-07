import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qllqasblk.css';
import '../../css/y/yzbzu_bof.css';
import '../../css/h/hq3-ki02p.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qllqasblk"/><path class="yzbzu_bof"/><path class="hq3-ki02p"/><path class="cx31vwdjv"/></g>`,
		"fallback": "solar:chat-square-code-linear",
	});
}

export default Component;

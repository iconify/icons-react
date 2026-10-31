import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/flymm7owo.css';
import '../../css/a/ap494ac_s.css';
import '../../css/e/ecntug1lc.css';
import '../../css/z/zisqmhltv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBP4jAedY" x1="10" x2="14" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="flymm7owo wm-k"/><path class="ap494ac_s wm-deco"/><path fill="url(#SVGBP4jAedY)" class="ecntug1lc wm-k"/><path class="wm-shadow zisqmhltv"/></g>`,
		"fallback": "withicons-valentine:arrow-left",
	});
}

export default Component;

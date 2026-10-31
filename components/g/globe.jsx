import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/e/eeefjcmep.css';
import '../../css/s/sci98i9th.css';
import '../../css/v/v_b033bip.css';
import '../../css/w/wh-1g0bds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9zumBzvN" cx="9" cy="8" r="15" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="eeefjcmep wm-deco"/><circle fill="url(#SVG9zumBzvN)" class="sci98i9th wm-k"/><path class="v_b033bip wm-k"/><path class="wh-1g0bds wm-shine"/></g>`,
		"fallback": "withicons-rangoli:globe",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/r/rpoz03aep.css';
import '../../css/t/tm7zdziam.css';
import '../../css/o/op_0sfbee.css';
import '../../css/w/wnvev9bjr.css';
import '../../css/i/it7ct0bnx.css';
import '../../css/k/kvlrv79ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGeiBvOeog" cx="8.8" cy="4.64" r="19.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="rpoz03aep wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="tm7zdziam wm-a"/><path fill="url(#SVGeiBvOeog)" class="op_0sfbee wm-k"/><path class="wm-shine wnvev9bjr"/><path class="it7ct0bnx wm-deco"/><path class="kvlrv79ak wm-deco"/></g>`,
		"fallback": "withicons-rangoli:flag",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/w/wfm81l1wt.css';
import '../../css/m/mjt7wbcjm.css';
import '../../css/f/f5i68pbes.css';
import '../../css/i/i8mrfcc3b.css';
import '../../css/s/sto_3jo_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGTylsdcpX" cx="7.51" cy="6.29" r="25.96" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wfm81l1wt wm-shadow"/><path fill="url(#SVGTylsdcpX)" class="mjt7wbcjm wm-k"/><path class="f5i68pbes wm-deco"/><path fill="url(#SVGDCUexbkg)" class="i8mrfcc3b wm-deco"/><path class="sto_3jo_h wm-deco"/></g>`,
		"fallback": "withicons-rangoli:baguette",
	});
}

export default Component;

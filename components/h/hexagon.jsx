import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/p/phiopibwk.css';
import '../../css/d/dmzw60bdo.css';
import '../../css/n/nt9wcbbzk.css';
import '../../css/r/r0hrtzb1w.css';
import '../../css/g/gabkk1bjk.css';
import '../../css/v/vxd6xpb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGQOXACdgd" cx="8.83" cy="7.63" r="19.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="phiopibwk wm-deco"/><path class="dmzw60bdo wm-deco"/><path class="nt9wcbbzk wm-shadow"/><path fill="url(#SVGQOXACdgd)" class="r0hrtzb1w wm-k"/><path class="gabkk1bjk wm-k"/><path class="vxd6xpb_o wm-shine"/></g>`,
		"fallback": "withicons-rangoli:hexagon",
	});
}

export default Component;

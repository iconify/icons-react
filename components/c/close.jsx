import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/i/ira9qdbkj.css';
import '../../css/u/uqdvbl_vw.css';
import '../../css/v/v8onzpv0m.css';
import '../../css/j/jbzkv5b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGNlOhPb4p" cx="7.5" cy="8" r="16" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path stroke="url(#SVGNlOhPb4p)" class="ira9qdbkj wm-k"/><path class="uqdvbl_vw wm-deco"/><path fill="url(#SVGDCUexbkg)" class="v8onzpv0m wm-deco"/><path class="jbzkv5b1d wm-deco"/></g>`,
		"fallback": "withicons-rangoli:close",
	});
}

export default Component;

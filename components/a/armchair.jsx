import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/g/g0l39tgfn.css';
import '../../css/n/nfxqt-izs.css';
import '../../css/u/ul4lqbcql.css';
import '../../css/r/rrrn0sb9o.css';
import '../../css/g/gh8_7obef.css';
import '../../css/r/r_hcj7byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGsLAjabPH" cx="7.64" cy="6.74" r="24.57" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="g0l39tgfn wm-shadow"/><path fill="url(#SVGsLAjabPH)" class="nfxqt-izs wm-k"/><path class="ul4lqbcql wm-shine"/><path class="rrrn0sb9o wm-deco"/><path fill="url(#SVGDCUexbkg)" class="gh8_7obef wm-deco"/><path class="r_hcj7byw wm-deco"/></g>`,
		"fallback": "withicons-rangoli:armchair",
	});
}

export default Component;

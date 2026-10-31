import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/t/t54q3vwwd.css';
import '../../css/l/lshkfp20d.css';
import '../../css/n/nahguzb0y.css';
import '../../css/c/csuylnp0x.css';
import '../../css/l/lawms5m5b.css';
import '../../css/u/uxqw82b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG4DbnMbDf" cx="7.5" cy="8.2" r="23.01" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="t54q3vwwd wm-shadow"/><path fill="url(#SVG4DbnMbDf)" class="lshkfp20d wm-k"/><path class="nahguzb0y wm-shine"/><path class="csuylnp0x wm-deco"/><path fill="url(#SVGDCUexbkg)" class="lawms5m5b wm-deco"/><path class="uxqw82b-n wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cloud-alert",
	});
}

export default Component;

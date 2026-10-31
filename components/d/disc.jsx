import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/t/ttg8ixkhc.css';
import '../../css/o/of19sibpy.css';
import '../../css/b/bbqp_7gyi.css';
import '../../css/q/qi1_j_b_o.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/n/nqrq7rbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ttg8ixkhc wm-shadow"/><path fill="url(#SVGssztEN0r)" class="of19sibpy wm-k"/><path fill="url(#SVGDCUexbkg)" class="bbqp_7gyi wm-a"/><path class="qi1_j_b_o wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="nqrq7rbor wm-deco"/></g>`,
		"fallback": "withicons-rangoli:disc",
	});
}

export default Component;

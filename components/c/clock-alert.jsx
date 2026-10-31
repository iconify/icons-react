import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/p/pwtmoxblr.css';
import '../../css/i/idpgqacrw.css';
import '../../css/j/j21nmvdba.css';
import '../../css/j/jqfjfgb2y.css';
import '../../css/g/gex9k8btc.css';
import '../../css/o/oc6xgfc3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGii0wkcPr" cx="8.52" cy="7.52" r="20.24" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="pwtmoxblr wm-deco"/><path class="idpgqacrw wm-deco"/><path class="j21nmvdba wm-shadow"/><path fill="url(#SVGii0wkcPr)" class="jqfjfgb2y wm-k"/><path class="gex9k8btc wm-shine"/><path class="oc6xgfc3h wm-s"/></g>`,
		"fallback": "withicons-rangoli:clock-alert",
	});
}

export default Component;

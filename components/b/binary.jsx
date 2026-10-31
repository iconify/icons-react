import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/n/nsggj2bvq.css';
import '../../css/r/rnzt0d75d.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/i/inmfxbc6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGaRotrtjU" cx="4.12" cy="7.18" r="17.77" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="nsggj2bvq wm-a"/><path fill="url(#SVGaRotrtjU)" class="rnzt0d75d wm-k"/><path class="gyytzlc5m wm-deco"/><path class="inmfxbc6y wm-deco"/></g>`,
		"fallback": "withicons-rangoli:binary",
	});
}

export default Component;

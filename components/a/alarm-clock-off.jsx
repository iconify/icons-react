import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/g/gcj-f8b-k.css';
import '../../css/t/tgov0ebht.css';
import '../../css/o/oql5xxaew.css';
import '../../css/i/i5921qbvb.css';
import '../../css/p/p7shhrbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGfTZU7cSa" cx="8.52" cy="8.08" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="gcj-f8b-k wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="tgov0ebht wm-a"/><path fill="url(#SVGfTZU7cSa)" class="oql5xxaew wm-k"/><path class="i5921qbvb wm-shine"/><path class="p7shhrbbj wm-s"/></g>`,
		"fallback": "withicons-rangoli:alarm-clock-off",
	});
}

export default Component;

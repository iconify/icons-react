import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/p/pwtmoxblr.css';
import '../../css/i/idpgqacrw.css';
import '../../css/t/t3vzbubvs.css';
import '../../css/g/ghuh4acpn.css';
import '../../css/k/ki5jqcp9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGZhCCWdnG" cx="8.48" cy="7.52" r="20.36" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="pwtmoxblr wm-deco"/><path class="idpgqacrw wm-deco"/><path class="t3vzbubvs wm-shadow"/><path fill="url(#SVGZhCCWdnG)" class="ghuh4acpn wm-k"/><path class="ki5jqcp9o wm-shine"/></g>`,
		"fallback": "withicons-rangoli:help-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/m/m0l0mebdy.css';
import '../../css/i/ibpkulbfv.css';
import '../../css/z/zbpdkgzrp.css';
import '../../css/e/e_hnu4bso.css';
import '../../css/u/u7jzzh_6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="m0l0mebdy wm-shadow"/><path fill="url(#SVGnreWddSd)" class="ibpkulbfv wm-k"/><path class="wm-shine zbpdkgzrp"/><path fill="url(#SVGDCUexbkg)" class="e_hnu4bso wm-deco"/><path class="u7jzzh_6k wm-deco"/></g>`,
		"fallback": "withicons-rangoli:heart",
	});
}

export default Component;

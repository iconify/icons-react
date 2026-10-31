import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/lisltgbgu.css';
import '../../css/o/oov419bgj.css';
import '../../css/j/jnl_0lk9e.css';
import '../../css/o/ob65tvldn.css';
import '../../css/x/xc59t9b1v.css';
import '../../css/d/dn70wxbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGKfjmacTK" cx="7.86" cy="6.85" r="24.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="lisltgbgu wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="oov419bgj wm-a"/><path fill="url(#SVGKfjmacTK)" class="jnl_0lk9e wm-k"/><path class="ob65tvldn wm-k"/><path class="wm-k xc59t9b1v"/><path class="dn70wxbjt wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-owl",
	});
}

export default Component;

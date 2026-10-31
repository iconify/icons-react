import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/n/nc64yi37v.css';
import '../../css/n/nw8b-5isj.css';
import '../../css/e/edynbnbcx.css';
import '../../css/u/ui-s15xlb.css';
import '../../css/s/swcljibjt.css';
import '../../css/u/uh395ackg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGm35slbTu" cx="7.49" cy="6.15" r="23.65" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="nc64yi37v wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="nw8b-5isj wm-a"/><path fill="url(#SVGm35slbTu)" class="edynbnbcx wm-k"/><path class="ui-s15xlb wm-deco"/><path fill="url(#SVGDCUexbkg)" class="swcljibjt wm-deco"/><path class="uh395ackg wm-deco"/></g>`,
		"fallback": "withicons-rangoli:cricket",
	});
}

export default Component;

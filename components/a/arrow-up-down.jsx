import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/g0txz3b-g.css';
import '../../css/k/kib2oacex.css';
import '../../css/t/tmjgme9hr.css';
import '../../css/g/gv90jxbni.css';
import '../../css/p/post1p_rp.css';
import '../../css/r/rbvzenbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="g0txz3b-g wm-k"/><path class="kib2oacex wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="tmjgme9hr wm-k"/><path class="gv90jxbni wm-shadow"/><path class="post1p_rp wm-shine"/><path class="rbvzenbaq wm-shine"/></g>`,
		"fallback": "withicons-valentine:arrow-up-down",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rl6e1te0m.css';
import '../../css/a/ad2miqt6x.css';
import '../../css/i/i_xextbgx.css';
import '../../css/y/y3g8mfqzt.css';
import '../../css/v/vcpsodbsm.css';
import '../../css/w/w0o9m_bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNUFOMbDl" x1="10" x2="14" y1="3.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rl6e1te0m wm-k"/><path class="ad2miqt6x wm-k"/><path fill="url(#SVGNUFOMbDl)" class="i_xextbgx wm-k"/><path class="wm-shadow y3g8mfqzt"/><path class="vcpsodbsm wm-shine"/><path class="w0o9m_bfq wm-shine"/></g>`,
		"fallback": "withicons-valentine:car-front",
	});
}

export default Component;

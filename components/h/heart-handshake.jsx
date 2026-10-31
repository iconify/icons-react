import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/frgp5wbsd.css';
import '../../css/f/fxvr54owx.css';
import '../../css/l/logccvb_b.css';
import '../../css/q/qk889bu7j.css';
import '../../css/u/uujh1tb_q.css';
import '../../css/o/o-i_z-cgq.css';
import '../../css/f/fg_-uxugh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="frgp5wbsd wm-k"/><path class="fxvr54owx wm-deco"/><path class="logccvb_b wm-k"/><path fill="url(#SVGNQi7UdpF)" class="qk889bu7j wm-k"/><path class="uujh1tb_q wm-shadow"/><path class="o-i_z-cgq wm-shine"/><path class="fg_-uxugh wm-shine"/></g>`,
		"fallback": "withicons-valentine:heart-handshake",
	});
}

export default Component;

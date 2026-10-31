import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/tb-0f0g4d.css';
import '../../css/m/m4s00nxer.css';
import '../../css/a/axj2uo0_i.css';
import '../../css/b/bs_zhdcia.css';
import '../../css/q/qr7n9cb6b.css';
import '../../css/m/markezgnk.css';
import '../../css/m/mokr2_8cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4THZVx4m" x1="9.77" x2="13.77" y1="2.29" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="tb-0f0g4d wm-k"/><path class="m4s00nxer wm-a"/><path class="axj2uo0_i wm-deco"/><path class="bs_zhdcia wm-k"/><path fill="url(#SVG4THZVx4m)" class="qr7n9cb6b wm-k"/><path class="markezgnk wm-a"/><path class="mokr2_8cz wm-shadow"/></g>`,
		"fallback": "withicons-valentine:cricket",
	});
}

export default Component;

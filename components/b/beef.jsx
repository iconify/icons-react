import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/d_ffcnb6a.css';
import '../../css/f/ftfq-4b5s.css';
import '../../css/o/ousveguxb.css';
import '../../css/l/lwi1q5b7r.css';
import '../../css/i/i2cxfabyg.css';
import '../../css/q/q3c4zrbie.css';
import '../../css/i/ivmwa6zwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkr7NFb3E" x1="10" x2="14" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="d_ffcnb6a wm-k"/><path class="ftfq-4b5s wm-deco"/><path class="ousveguxb wm-k"/><path fill="url(#SVGkr7NFb3E)" class="lwi1q5b7r wm-k"/><path class="i2cxfabyg wm-shadow"/><path class="q3c4zrbie wm-shine"/><path class="ivmwa6zwj wm-shine"/></g>`,
		"fallback": "withicons-valentine:beef",
	});
}

export default Component;

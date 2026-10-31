import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rfch62bth.css';
import '../../css/n/nmri45ibj.css';
import '../../css/o/ox5ti6b2v.css';
import '../../css/a/a_30wrbgb.css';
import '../../css/j/jmn343dux.css';
import '../../css/v/v-lhlrbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rfch62bth wm-k"/><path class="nmri45ibj wm-deco"/><path fill="url(#SVGFXzhPeEy)" class="ox5ti6b2v wm-k"/><path class="a_30wrbgb wm-shadow"/><path class="jmn343dux wm-shine"/><path class="v-lhlrbae wm-shine"/></g>`,
		"fallback": "withicons-valentine:candy-corn",
	});
}

export default Component;

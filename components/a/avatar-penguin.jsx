import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/jyie__b7f.css';
import '../../css/x/x_4-kcp5n.css';
import '../../css/r/rdz-k68tr.css';
import '../../css/b/bwnjoibrq.css';
import '../../css/i/is500snwj.css';
import '../../css/b/bjr3w7bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="jyie__b7f wm-k"/><path class="wm-k x_4-kcp5n"/><path fill="url(#SVGFXzhPeEy)" class="rdz-k68tr wm-k"/><path class="bwnjoibrq wm-shadow"/><path class="is500snwj wm-shine"/><path class="bjr3w7bcb wm-shine"/></g>`,
		"fallback": "withicons-valentine:avatar-penguin",
	});
}

export default Component;

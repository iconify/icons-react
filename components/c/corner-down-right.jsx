import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/q/qk84yib4y.css';
import '../../css/x/xywg222xg.css';
import '../../css/c/ckly6egtu.css';
import '../../css/v/vu44_lrtu.css';
import '../../css/p/pww8gccmn.css';
import '../../css/b/bpae280mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhFnIkxqz" x1="10" x2="14" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="qk84yib4y wm-k"/><path class="wm-deco xywg222xg"/><path fill="url(#SVGhFnIkxqz)" class="ckly6egtu wm-k"/><path class="vu44_lrtu wm-shadow"/><path class="pww8gccmn wm-shine"/><path class="bpae280mv wm-shine"/></g>`,
		"fallback": "withicons-valentine:corner-down-right",
	});
}

export default Component;

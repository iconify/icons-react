import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zfouamngs.css';
import '../../css/c/cu2-23ubk.css';
import '../../css/b/bj6wobb3u.css';
import '../../css/n/na5v6ru4x.css';
import '../../css/y/y7qq4o32y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zfouamngs"/><path fill="url(#SVGN1oYpimo)" class="cu2-23ubk wm-k"/><path class="bj6wobb3u wm-shadow"/><path class="na5v6ru4x wm-shine"/><path class="wm-shine y7qq4o32y"/></g>`,
		"fallback": "withicons-valentine:dumbbell",
	});
}

export default Component;

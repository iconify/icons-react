import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/r3uwi74fh.css';
import '../../css/y/y75s6cb8y.css';
import '../../css/d/dffjzm7-f.css';
import '../../css/c/c_aug37vp.css';
import '../../css/c/c1xbw8bem.css';
import '../../css/z/zf9v2mb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN1oYpimo" x1="10" x2="14" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="r3uwi74fh wm-k"/><path class="wm-deco y75s6cb8y"/><path fill="url(#SVGN1oYpimo)" class="dffjzm7-f wm-k"/><path class="c_aug37vp wm-shadow"/><path class="c1xbw8bem wm-shine"/><path class="wm-shine zf9v2mb3b"/></g>`,
		"fallback": "withicons-valentine:indent-increase",
	});
}

export default Component;

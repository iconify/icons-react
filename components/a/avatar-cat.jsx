import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/u8php7dwn.css';
import '../../css/y/yv7l7vu6p.css';
import '../../css/i/ibz7a1whg.css';
import '../../css/w/w6parxblx.css';
import '../../css/v/vtcnuac2u.css';
import '../../css/j/jitutezda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGs75RxbPO" x1="10" x2="14" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="u8php7dwn wm-k"/><path class="wm-k yv7l7vu6p"/><path fill="url(#SVGs75RxbPO)" class="ibz7a1whg wm-k"/><path class="w6parxblx wm-shadow"/><path class="vtcnuac2u wm-shine"/><path class="jitutezda wm-shine"/></g>`,
		"fallback": "withicons-valentine:avatar-cat",
	});
}

export default Component;

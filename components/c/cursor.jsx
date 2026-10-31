import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rc0wqbc_r.css';
import '../../css/r/r51o9i-cx.css';
import '../../css/h/hr3zkodvy.css';
import '../../css/c/c_q-c9kyg.css';
import '../../css/q/qd2j-wn-m.css';
import '../../css/u/u07kn8bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4j46rb3t" x1="10" x2="14" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rc0wqbc_r wm-k"/><path class="r51o9i-cx wm-a"/><path class="hr3zkodvy wm-deco"/><path fill="url(#SVG4j46rb3t)" class="c_q-c9kyg wm-k"/><path class="qd2j-wn-m wm-a"/><path class="u07kn8bld wm-shadow"/></g>`,
		"fallback": "withicons-valentine:cursor",
	});
}

export default Component;

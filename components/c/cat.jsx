import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/u/utxpdmbgz.css';
import '../../css/p/p5qgdgb3x.css';
import '../../css/q/q0g9kpbhw.css';
import '../../css/h/h9bq-ab_y.css';
import '../../css/i/i0yx_pb5i.css';
import '../../css/b/b6-9okbss.css';
import '../../css/g/gpa8nbyzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="utxpdmbgz wm-k"/><path class="p5qgdgb3x wm-deco"/><path class="q0g9kpbhw wm-k"/><path fill="url(#SVGNQi7UdpF)" class="h9bq-ab_y wm-k"/><path class="i0yx_pb5i wm-shadow"/><path class="b6-9okbss wm-shine"/><path class="gpa8nbyzo wm-shine"/></g>`,
		"fallback": "withicons-valentine:cat",
	});
}

export default Component;

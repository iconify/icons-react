import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kdt6xvbab.css';
import '../../css/m/mm-547stu.css';
import '../../css/w/wk29zkd3m.css';
import '../../css/t/t_q2v4b5h.css';
import '../../css/c/clk0ecb-y.css';
import '../../css/a/a_q56rb5o.css';
import '../../css/h/hrr18xbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFuUmJbCn" x1="10" x2="14" y1="6.5" y2="17.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kdt6xvbab wm-k"/><path class="mm-547stu wm-deco"/><path fill="url(#SVGFuUmJbCn)" class="wk29zkd3m wm-a"/><path fill="url(#SVGFuUmJbCn)" class="t_q2v4b5h wm-k"/><path class="clk0ecb-y wm-k"/><path class="a_q56rb5o wm-shadow"/><path class="hrr18xbss wm-shine"/></g>`,
		"fallback": "withicons-valentine:arrow-left-right",
	});
}

export default Component;

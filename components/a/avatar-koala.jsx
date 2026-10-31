import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/q/qxjgji48s.css';
import '../../css/e/eta_izb-w.css';
import '../../css/x/x-34ib-dj.css';
import '../../css/r/r8gaumb5p.css';
import '../../css/k/kr0lmbc-g.css';
import '../../css/m/m5h10hbsh.css';
import '../../css/t/thy214bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCnt44dIP" x1="10" x2="14" y1="4.51" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="qxjgji48s wm-k"/><path class="eta_izb-w wm-deco"/><path class="wm-k x-34ib-dj"/><path fill="url(#SVGCnt44dIP)" class="r8gaumb5p wm-k"/><path class="kr0lmbc-g wm-shadow"/><path class="m5h10hbsh wm-shine"/><path class="thy214bsi wm-shine"/></g>`,
		"fallback": "withicons-valentine:avatar-koala",
	});
}

export default Component;

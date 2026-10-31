import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/m/m_oypr-vv.css';
import '../../css/k/kts_3gb2g.css';
import '../../css/m/mcyua6b1o.css';
import '../../css/w/w2h4sjbhy.css';
import '../../css/m/mls6tcbvv.css';
import '../../css/h/h-qp_ibci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhqu7xcCo" x1="10" x2="14" y1="6" y2="20.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="m_oypr-vv wm-k"/><path class="kts_3gb2g wm-k"/><path fill="url(#SVGhqu7xcCo)" class="mcyua6b1o wm-k"/><path class="w2h4sjbhy wm-shadow"/><path class="mls6tcbvv wm-shine"/><path class="h-qp_ibci wm-shine"/></g>`,
		"fallback": "withicons-valentine:handshake",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah2nw_bsy.css';
import '../../css/l/lpkhpnbrd.css';
import '../../css/g/g_3ckc6_n.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/x/x2uudub6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ah2nw_bsy wm-k"/><path class="lpkhpnbrd wm-a"/><path class="g_3ckc6_n wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a x2uudub6d"/></g>`,
		"fallback": "withicons:basketball-engrave",
	});
}

export default Component;

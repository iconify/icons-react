import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/awuolgb8n.css';
import '../../css/w/wii-1tb_e.css';
import '../../css/k/kxe3efb-b.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/a/akzr1nb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="awuolgb8n wm-k"/><path class="wii-1tb_e wm-a"/><path class="kxe3efb-b wm-shadow"/><path class="f2iz_pbwp wm-k"/><path class="d3y9mw6db wm-k"/><path class="akzr1nb6u wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-braids-engrave",
	});
}

export default Component;

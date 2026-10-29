import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_vkt6bfo.css';
import '../../css/o/o8--pzbxc.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/s/sv9nxnpyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t_vkt6bfo wm-k"/><path class="o8--pzbxc wm-shadow"/><path class="hooc3vbcx wm-k"/><path class="sv9nxnpyo wm-a"/></g>`,
		"fallback": "withicons:badge-dollar-sign-engrave",
	});
}

export default Component;

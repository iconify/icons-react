import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q_1chubdl.css';
import '../../css/o/o8--pzbxc.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/x/xq8xli58z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q_1chubdl wm-k"/><path class="o8--pzbxc wm-shadow"/><path class="hooc3vbcx wm-k"/><path class="wm-a xq8xli58z"/></g>`,
		"fallback": "withicons:badge-info-engrave",
	});
}

export default Component;

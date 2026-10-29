import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rgnywgcmw.css';
import '../../css/o/o8--pzbxc.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/i/i4t66q3an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rgnywgcmw wm-k"/><path class="o8--pzbxc wm-shadow"/><path class="hooc3vbcx wm-k"/><path class="i4t66q3an wm-a"/></g>`,
		"fallback": "withicons:badge-check-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kyo3e8xio.css';
import '../../css/o/o8--pzbxc.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/r/r2fnfdpvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kyo3e8xio wm-k"/><path class="o8--pzbxc wm-shadow"/><path class="hooc3vbcx wm-k"/><path class="r2fnfdpvh wm-a"/></g>`,
		"fallback": "withicons:badge-percent-engrave",
	});
}

export default Component;

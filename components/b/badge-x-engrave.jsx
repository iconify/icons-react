import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bp590ubur.css';
import '../../css/o/o8--pzbxc.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bp590ubur wm-k"/><path class="o8--pzbxc wm-shadow"/><path class="hooc3vbcx wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:badge-x-engrave",
	});
}

export default Component;

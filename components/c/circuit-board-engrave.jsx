import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gtmmvyb0k.css';
import '../../css/p/pkxbihy8h.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/j/jsyt9abxh.css';
import '../../css/q/qpzat4bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gtmmvyb0k wm-k"/><path class="pkxbihy8h wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="jsyt9abxh wm-a"/><path class="qpzat4bis wm-a"/></g>`,
		"fallback": "withicons:circuit-board-engrave",
	});
}

export default Component;

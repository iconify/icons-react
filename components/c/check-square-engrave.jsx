import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zaobdobsh.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/i/i4t66q3an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zaobdobsh"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="i4t66q3an wm-a"/></g>`,
		"fallback": "withicons:check-square-engrave",
	});
}

export default Component;

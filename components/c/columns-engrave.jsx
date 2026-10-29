import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wyh039bkz.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/h/h2-2dgnfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wyh039bkz"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="h2-2dgnfu wm-a"/></g>`,
		"fallback": "withicons:columns-engrave",
	});
}

export default Component;

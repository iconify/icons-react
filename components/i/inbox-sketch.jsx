import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wap7p7b8n.css';
import '../../css/t/tmmytsbqr.css';
import '../../css/l/lj2drgb8a.css';
import '../../css/f/fjbh96but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wap7p7b8n"/><path class="tmmytsbqr wm-k"/><path class="lj2drgb8a wm-k"/><path class="fjbh96but wm-a"/></g>`,
		"fallback": "withicons:inbox-sketch",
	});
}

export default Component;

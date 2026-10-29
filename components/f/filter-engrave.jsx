import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y51shub2s.css';
import '../../css/q/qxwv1nbma.css';
import '../../css/l/l5bot_fnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y51shub2s"/><path class="qxwv1nbma wm-shadow"/><path class="l5bot_fnt"/></g>`,
		"fallback": "withicons:filter-engrave",
	});
}

export default Component;

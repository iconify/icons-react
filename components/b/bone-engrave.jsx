import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1vtcqu8x.css';
import '../../css/v/v8yvcacmt.css';
import '../../css/y/yrnv22bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p1vtcqu8x"/><path class="v8yvcacmt wm-shadow"/><path class="yrnv22bjh"/></g>`,
		"fallback": "withicons:bone-engrave",
	});
}

export default Component;

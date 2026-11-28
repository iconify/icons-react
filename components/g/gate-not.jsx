import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yo0duhs6b.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/x/xh77j1kmh.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yo0duhs6b"/><path class="lww7c4bwc"/><path class="xh77j1kmh"/><path class="qso6odhhx"/></g>`,
		"fallback": "iconaut:gate-not",
	});
}

export default Component;

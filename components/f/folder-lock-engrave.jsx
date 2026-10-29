import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/opyudebor.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';
import '../../css/w/wxx3ysb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="opyudebor wm-k"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu wm-k"/><path class="wm-a wxx3ysb1g"/></g>`,
		"fallback": "withicons:folder-lock-engrave",
	});
}

export default Component;

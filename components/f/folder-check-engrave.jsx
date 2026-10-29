import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dsi80qzaw.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';
import '../../css/n/natt5rb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dsi80qzaw wm-k"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu wm-k"/><path class="natt5rb_j wm-a"/></g>`,
		"fallback": "withicons:folder-check-engrave",
	});
}

export default Component;

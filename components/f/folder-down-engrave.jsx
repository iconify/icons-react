import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k036j_b7j.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';
import '../../css/o/onak3bbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k036j_b7j wm-k"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu wm-k"/><path class="onak3bbfh wm-a"/></g>`,
		"fallback": "withicons:folder-down-engrave",
	});
}

export default Component;

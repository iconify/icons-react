import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vj5dfnbvc.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';
import '../../css/z/z6yx0ibhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vj5dfnbvc wm-k"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu wm-k"/><path class="wm-a z6yx0ibhd"/></g>`,
		"fallback": "withicons:folder-search-engrave",
	});
}

export default Component;

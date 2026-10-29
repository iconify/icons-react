import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z6f_pmg6n.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';
import '../../css/w/wqt3r3b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z6f_pmg6n"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu wm-k"/><path class="wm-a wqt3r3b9i"/></g>`,
		"fallback": "withicons:folder-plus-engrave",
	});
}

export default Component;

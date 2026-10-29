import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ui_oqub5z.css';
import '../../css/y/y_jfvcwtp.css';
import '../../css/l/l484bmbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ui_oqub5z"/><path class="wm-shadow y_jfvcwtp"/><path class="l484bmbsu"/></g>`,
		"fallback": "withicons:folder-engrave",
	});
}

export default Component;

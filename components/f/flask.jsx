import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vn0eg2bzk.css';
import '../../css/x/xq0vw-b8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="vn0eg2bzk"/><path class="xq0vw-b8x"/></g>`,
		"fallback": "doodle-icons:flask",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xgu2_6bfp.css';
import '../../css/y/yv9b36bbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="xgu2_6bfp"/><path class="yv9b36bbw"/></g>`,
		"fallback": "doodle-icons:eraser",
	});
}

export default Component;

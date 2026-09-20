import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qynk6pbgr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qynk6pbgr"/>`,
		"fallback": "system-uicons:flame-alt",
	});
}

export default Component;

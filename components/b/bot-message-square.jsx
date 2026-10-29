import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ee_t7pb7v.css';
import '../../css/y/yu3ja9btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ee_t7pb7v"/><path class="wm-a yu3ja9btn"/></g>`,
		"fallback": "withicons:bot-message-square",
	});
}

export default Component;

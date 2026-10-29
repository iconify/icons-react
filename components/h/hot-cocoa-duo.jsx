import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m8nybubas.css';
import '../../css/q/qm0f6mu1s.css';
import '../../css/z/zp1t379qi.css';
import '../../css/o/o7ull5bnt.css';
import '../../css/v/vu3k_039v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m8nybubas"/><path class="qm0f6mu1s wm-a"/><path class="wm-s zp1t379qi"/><path class="o7ull5bnt"/><path class="vu3k_039v wm-a"/></g>`,
		"fallback": "withicons:hot-cocoa-duo",
	});
}

export default Component;

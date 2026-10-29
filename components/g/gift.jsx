import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/w/w8x39x84j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qiyypgbtt"/><path class="w8x39x84j wm-a"/></g>`,
		"fallback": "withicons:gift",
	});
}

export default Component;

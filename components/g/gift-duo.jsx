import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k5hkbv56d.css';
import '../../css/j/j8_x8iboc.css';
import '../../css/w/w8x39x84j.css';
import '../../css/q/qiyypgbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k5hkbv56d"/><path class="j8_x8iboc wm-a"/><path class="w8x39x84j wm-a"/><path class="qiyypgbtt"/></g>`,
		"fallback": "withicons:gift-duo",
	});
}

export default Component;

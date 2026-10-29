import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m-zgutb9k.css';
import '../../css/f/f545reb7b.css';
import '../../css/w/wevkxlbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m-zgutb9k"/><path class="f545reb7b wm-a"/><path class="wevkxlbtt"/></g>`,
		"fallback": "withicons:baguette-duo",
	});
}

export default Component;

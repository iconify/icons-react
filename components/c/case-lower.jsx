import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jevsxkbae.css';
import '../../css/i/ikbdxb4_m.css';
import '../../css/v/vglq0cber.css';
import '../../css/h/h0zev5kxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jevsxkbae"/><path class="ikbdxb4_m"/><path class="vglq0cber"/><path class="h0zev5kxf"/></g>`,
		"fallback": "iconaut:case-lower",
	});
}

export default Component;

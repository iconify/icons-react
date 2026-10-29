import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gaam40bfx.css';
import '../../css/g/gdnuq8wfy.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gaam40bfx"/><path class="gdnuq8wfy"/><path class="g8_iol2hx wm-a"/></g>`,
		"fallback": "withicons:binoculars",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f_fz8wbma.css';
import '../../css/s/sz0wabcsi.css';
import '../../css/w/wbn73qbge.css';
import '../../css/u/uneyfrblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="f_fz8wbma wm-shadow"/><path class="sz0wabcsi wm-shadow"/><path class="wbn73qbge"/><path class="uneyfrblo"/></g>`,
		"fallback": "withicons-brutal:book",
	});
}

export default Component;

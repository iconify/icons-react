import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f9tk4kbpd.css';
import '../../css/v/v1iyf3ejh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f9tk4kbpd"/><path class="v1iyf3ejh"/></g>`,
		"fallback": "iconaut:corner-left-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c2osk-a-j.css';
import '../../css/f/fbhxntbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c2osk-a-j"/><path class="fbhxntbxi wm-a"/></g>`,
		"fallback": "withicons:ambulance",
	});
}

export default Component;

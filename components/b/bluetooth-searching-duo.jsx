import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/elb6v419q.css';
import '../../css/o/o0i0qmbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="elb6v419q"/><path class="o0i0qmbpr"/></g>`,
		"fallback": "iconaut:bluetooth-searching-duo",
	});
}

export default Component;

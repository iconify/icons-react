import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/g/gpzldrb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m2ebxhp-u"/><path class="gpzldrb9z wm-s"/></g>`,
		"fallback": "withicons:cloud-upload",
	});
}

export default Component;

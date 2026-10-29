import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h9rr08b1k.css';
import '../../css/g/gpzldrb9z.css';
import '../../css/m/m2ebxhp-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h9rr08b1k"/><path class="gpzldrb9z wm-s"/><path class="m2ebxhp-u"/></g>`,
		"fallback": "withicons:cloud-upload-duo",
	});
}

export default Component;

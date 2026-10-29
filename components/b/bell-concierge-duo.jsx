import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gn0ui-b3h.css';
import '../../css/o/oivip8bjf.css';
import '../../css/j/j5ce3sbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gn0ui-b3h"/><path class="oivip8bjf wm-a"/><path class="j5ce3sbao"/></g>`,
		"fallback": "withicons:bell-concierge-duo",
	});
}

export default Component;

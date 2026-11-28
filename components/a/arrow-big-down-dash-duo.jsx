import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws9c0dbot.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oqw9z-byp.css';
import '../../css/u/us6x24bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ws9c0dbot"/><g class="dt0cm9dhy primary"><path class="oqw9z-byp"/><path class="us6x24bsm"/></g>`,
		"fallback": "iconaut:arrow-big-down-dash-duo",
	});
}

export default Component;

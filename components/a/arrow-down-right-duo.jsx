import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t0oq895gp.css';
import '../../css/y/ygza_zbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t0oq895gp"/><path class="ygza_zbsk"/></g>`,
		"fallback": "iconaut:arrow-down-right-duo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ur3agxpix.css';
import '../../css/h/h2f_239py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ur3agxpix"/><path class="h2f_239py"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-duo",
	});
}

export default Component;

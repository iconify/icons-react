import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nmjmamnbd.css';
import '../../css/g/gbbwmvbvf.css';
import '../../css/r/reqp0xphh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nmjmamnbd"/><path class="gbbwmvbvf"/><path class="reqp0xphh"/></g>`,
		"fallback": "iconaut:corn",
	});
}

export default Component;

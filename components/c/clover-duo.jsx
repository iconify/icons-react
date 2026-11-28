import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7xarkbwg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/detamnbsk.css';
import '../../css/h/hw4x0eb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7xarkbwg secondary"/><g class="dt0cm9dhy primary"><path class="detamnbsk"/><path class="hw4x0eb1n"/></g>`,
		"fallback": "iconaut:clover-duo",
	});
}

export default Component;

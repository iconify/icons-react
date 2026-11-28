import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a25g90ajj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss8t1tbbv.css';
import '../../css/i/i29ayhbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a25g90ajj secondary"/><g class="dt0cm9dhy primary"><path class="ss8t1tbbv"/><path class="i29ayhbly"/></g>`,
		"fallback": "iconaut:bookmark-minus-duo",
	});
}

export default Component;

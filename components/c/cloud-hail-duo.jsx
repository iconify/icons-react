import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u468jwmsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cfhh0mbqp.css';
import '../../css/c/cm9o0sbya.css';
import '../../css/c/cdp9-zb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u468jwmsc"/><g class="dt0cm9dhy primary"><path class="cfhh0mbqp"/><path class="cm9o0sbya"/><path class="cdp9-zb2s"/></g>`,
		"fallback": "iconaut:cloud-hail-duo",
	});
}

export default Component;

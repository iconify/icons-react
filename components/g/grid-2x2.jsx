import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/c/cfkicbk9n.css';
import '../../css/y/ycawehbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie31z6an"/><path class="cfkicbk9n"/><path class="ycawehbdj"/></g>`,
		"fallback": "iconaut:grid-2x2",
	});
}

export default Component;

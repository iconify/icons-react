import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4w1opbcu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dca2urprn.css';
import '../../css/c/c6-ujx0zl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4w1opbcu secondary"/><g class="dt0cm9dhy primary"><path class="dca2urprn"/><path class="c6-ujx0zl"/></g>`,
		"fallback": "iconaut:home-duo",
	});
}

export default Component;

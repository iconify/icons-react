import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgz0iz72w.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgz0iz72w"/>`,
		"fallback": "fa-solid:car-alt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk8zpy4cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk8zpy4cv"/>`,
		"fallback": "hugeicons:arrow-big-up-dash",
	});
}

export default Component;

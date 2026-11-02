import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0pplxb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0pplxb8c"/>`,
		"fallback": "mingcute:chart-spline-line",
	});
}

export default Component;

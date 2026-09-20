import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibs2u_b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibs2u_b0i"/>`,
		"fallback": "ri:bubble-chart-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeibzhb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeibzhb6k"/>`,
		"fallback": "ri:donut-chart-fill",
	});
}

export default Component;

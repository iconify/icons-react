import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4rpq-bbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4rpq-bbj"/>`,
		"fallback": "ri:bar-chart-2-line",
	});
}

export default Component;

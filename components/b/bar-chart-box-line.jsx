import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml67rq0mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml67rq0mu"/>`,
		"fallback": "ri:bar-chart-box-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sijc31_mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sijc31_mq"/>`,
		"fallback": "mingcute:chart-column-stacked-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugij69wsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugij69wsj"/>`,
		"fallback": "mingcute:arrow-big-up-dash-line",
	});
}

export default Component;

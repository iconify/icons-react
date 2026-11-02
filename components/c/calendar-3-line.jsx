import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0cr4vzca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0cr4vzca"/>`,
		"fallback": "mingcute:calendar-3-line",
	});
}

export default Component;

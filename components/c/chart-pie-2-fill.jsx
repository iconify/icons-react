import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izwoc4b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izwoc4b1n"/>`,
		"fallback": "mingcute:chart-pie-2-fill",
	});
}

export default Component;

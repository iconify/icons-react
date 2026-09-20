import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha5r7tnjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha5r7tnjh"/>`,
		"fallback": "mingcute:check-circle-line",
	});
}

export default Component;

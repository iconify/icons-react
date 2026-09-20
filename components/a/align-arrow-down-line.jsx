import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veevc8lbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veevc8lbp"/>`,
		"fallback": "mingcute:align-arrow-down-line",
	});
}

export default Component;

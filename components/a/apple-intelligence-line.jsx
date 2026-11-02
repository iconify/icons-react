import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0w-x3_1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0w-x3_1n"/>`,
		"fallback": "mingcute:apple-intelligence-line",
	});
}

export default Component;

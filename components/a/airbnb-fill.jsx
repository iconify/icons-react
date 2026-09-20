import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukq-8fbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukq-8fbqe"/>`,
		"fallback": "mingcute:airbnb-fill",
	});
}

export default Component;

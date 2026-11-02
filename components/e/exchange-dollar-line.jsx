import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq9mfi5qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq9mfi5qb"/>`,
		"fallback": "mingcute:exchange-dollar-line",
	});
}

export default Component;

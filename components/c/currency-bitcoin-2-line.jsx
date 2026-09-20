import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2x_3ebpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2x_3ebpa"/>`,
		"fallback": "mingcute:currency-bitcoin-2-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckohrz7gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckohrz7gm"/>`,
		"fallback": "mingcute:chart-candlestick-fill",
	});
}

export default Component;

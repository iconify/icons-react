import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bceb90b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bceb90b6z"/>`,
		"fallback": "mingcute:binance-usd-busd-line",
	});
}

export default Component;

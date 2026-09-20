import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg7wprbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg7wprbps"/>`,
		"fallback": "mingcute:binance-coin-bnb-line",
	});
}

export default Component;

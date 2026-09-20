import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coz08f0-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coz08f0-x"/>`,
		"fallback": "mingcute:binance-coin-bnb-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpm12ebsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpm12ebsx"/>`,
		"fallback": "mingcute:binance-coin-bnb-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz1m-7h_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz1m-7h_f"/>`,
		"fallback": "mingcute:binance-coin-bnb-line",
	});
}

export default Component;

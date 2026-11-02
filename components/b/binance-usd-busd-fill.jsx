import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qei0r4z2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qei0r4z2t"/>`,
		"fallback": "mingcute:binance-usd-busd-fill",
	});
}

export default Component;

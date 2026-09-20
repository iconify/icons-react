import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egnuz7xuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egnuz7xuw"/>`,
		"fallback": "mingcute:candles-fill",
	});
}

export default Component;

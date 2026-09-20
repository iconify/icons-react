import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk8u-1b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk8u-1b5h"/>`,
		"fallback": "keyline-icons:chart-candlestick",
	});
}

export default Component;

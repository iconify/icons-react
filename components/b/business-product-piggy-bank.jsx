import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n60pvibmo.css';
import '../../css/k/kouf8lb9s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n60pvibmo"/><path class="kouf8lb9s"/>`,
		"fallback": "streamline-pixel:business-product-piggy-bank",
	});
}

export default Component;

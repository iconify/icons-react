import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co3vs6bmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co3vs6bmx"/>`,
		"fallback": "game-icons:candlestick-phone",
	});
}

export default Component;

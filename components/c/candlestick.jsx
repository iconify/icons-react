import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og8m8vboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og8m8vboq"/>`,
		"fallback": "boxicons:candlestick",
	});
}

export default Component;

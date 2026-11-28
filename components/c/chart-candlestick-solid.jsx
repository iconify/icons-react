import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w94crya9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w94crya9b"/>`,
		"fallback": "iconaut:chart-candlestick-solid",
	});
}

export default Component;

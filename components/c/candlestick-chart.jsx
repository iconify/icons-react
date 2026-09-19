import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqcne8d0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqcne8d0q"/>`,
		"fallback": "iconoir:candlestick-chart",
	});
}

export default Component;

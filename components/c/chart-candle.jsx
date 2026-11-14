import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh86o1w7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh86o1w7q"/>`,
		"fallback": "hugeicons:chart-candle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us95y-boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us95y-boj"/>`,
		"fallback": "mingcute:book-heart-line",
	});
}

export default Component;

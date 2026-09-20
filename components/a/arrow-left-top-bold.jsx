import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8_bm6x1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8_bm6x1q"/>`,
		"fallback": "mdi:arrow-left-top-bold",
	});
}

export default Component;

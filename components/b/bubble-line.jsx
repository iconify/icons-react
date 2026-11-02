import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pchas7bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pchas7bfs"/>`,
		"fallback": "mingcute:bubble-line",
	});
}

export default Component;

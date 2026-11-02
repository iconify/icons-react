import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x98fo5x3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x98fo5x3q"/>`,
		"fallback": "mingcute:frame-line",
	});
}

export default Component;

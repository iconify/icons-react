import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unqr9nb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unqr9nb2e"/>`,
		"fallback": "mingcute:chart-area-line",
	});
}

export default Component;

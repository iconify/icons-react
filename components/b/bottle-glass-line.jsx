import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy-i9xb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy-i9xb8j"/>`,
		"fallback": "mingcute:bottle-glass-line",
	});
}

export default Component;

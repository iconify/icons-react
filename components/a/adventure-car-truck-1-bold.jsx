import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngl567b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngl567b_w"/>`,
		"fallback": "streamline-ultimate:adventure-car-truck-1-bold",
	});
}

export default Component;

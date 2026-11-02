import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctmi9mb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctmi9mb4h"/>`,
		"fallback": "mingcute:head-ai-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zczxv27do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zczxv27do"/>`,
		"fallback": "mingcute:chat-3-line",
	});
}

export default Component;

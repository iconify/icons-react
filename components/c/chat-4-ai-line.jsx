import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgux-pbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgux-pbfl"/>`,
		"fallback": "mingcute:chat-4-ai-line",
	});
}

export default Component;

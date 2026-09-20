import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-ch-u9hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-ch-u9hc"/>`,
		"fallback": "mingcute:chat-1-ai-fill",
	});
}

export default Component;

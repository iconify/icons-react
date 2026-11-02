import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctdfjcn_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctdfjcn_a"/>`,
		"fallback": "mingcute:chat-2-ai-fill",
	});
}

export default Component;

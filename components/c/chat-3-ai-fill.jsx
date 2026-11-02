import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da6l0slvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da6l0slvk"/>`,
		"fallback": "mingcute:chat-3-ai-fill",
	});
}

export default Component;

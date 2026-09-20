import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5od25bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5od25bec"/>`,
		"fallback": "mingcute:chat-3-ai-line",
	});
}

export default Component;

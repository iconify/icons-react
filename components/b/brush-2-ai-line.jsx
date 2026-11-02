import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir4zf7qyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir4zf7qyd"/>`,
		"fallback": "mingcute:brush-2-ai-line",
	});
}

export default Component;

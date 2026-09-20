import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcaesc56o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcaesc56o"/>`,
		"fallback": "mingcute:book-2-ai-line",
	});
}

export default Component;

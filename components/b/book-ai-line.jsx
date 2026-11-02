import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4prw-e6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4prw-e6r"/>`,
		"fallback": "mingcute:book-ai-line",
	});
}

export default Component;

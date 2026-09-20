import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff8ok2bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff8ok2bhc"/>`,
		"fallback": "mingcute:book-6-ai-fill",
	});
}

export default Component;

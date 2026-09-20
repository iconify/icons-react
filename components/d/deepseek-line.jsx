import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq8r70bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq8r70bzw"/>`,
		"fallback": "mingcute:deepseek-line",
	});
}

export default Component;

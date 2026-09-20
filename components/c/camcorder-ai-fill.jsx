import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmyw_-b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmyw_-b7i"/>`,
		"fallback": "mingcute:camcorder-ai-fill",
	});
}

export default Component;

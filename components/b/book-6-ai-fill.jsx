import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hev68328m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hev68328m"/>`,
		"fallback": "mingcute:book-6-ai-fill",
	});
}

export default Component;

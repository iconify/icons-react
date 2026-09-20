import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7gq9rvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci7gq9rvm"/>`,
		"fallback": "mingcute:camera-2-ai-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tap15_bpr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tap15_bpr"/>`,
		"fallback": "pullo:chat-plus-fill",
	});
}

export default Component;

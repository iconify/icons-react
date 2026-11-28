import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t19sx_49z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t19sx_49z"/>`,
		"fallback": "pullo:chat-question-thin",
	});
}

export default Component;

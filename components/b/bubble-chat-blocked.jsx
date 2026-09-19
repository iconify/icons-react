import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezlqj9b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezlqj9b5k"/>`,
		"fallback": "hugeicons:bubble-chat-blocked",
	});
}

export default Component;

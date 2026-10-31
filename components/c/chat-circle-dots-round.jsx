import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8axp6b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8axp6b6j"/>`,
		"fallback": "coolicons:chat-circle-dots-round",
	});
}

export default Component;

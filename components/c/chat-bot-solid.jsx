import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kotm7ebod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kotm7ebod"/>`,
		"fallback": "iconaut:chat-bot-solid",
	});
}

export default Component;

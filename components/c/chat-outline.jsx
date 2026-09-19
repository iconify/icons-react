import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf6woy2-u.css';
import '../../css/m/mr124pbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf6woy2-u"/><path clip-rule="evenodd" class="mr124pbqo"/>`,
		"fallback": "basil:chat-outline",
	});
}

export default Component;

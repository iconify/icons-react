import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1s8c0b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1s8c0b-o"/>`,
		"fallback": "streamline-sharp:chat-bubble-square-block-solid",
	});
}

export default Component;

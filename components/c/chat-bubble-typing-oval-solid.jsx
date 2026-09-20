import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyn48u6gq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyn48u6gq"/>`,
		"fallback": "streamline:chat-bubble-typing-oval-solid",
	});
}

export default Component;

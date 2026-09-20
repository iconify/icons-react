import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxd4tpyqp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxd4tpyqp"/>`,
		"fallback": "streamline:chat-bubble-oval-solid",
	});
}

export default Component;

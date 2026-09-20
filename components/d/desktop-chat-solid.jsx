import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no--e8__i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="no--e8__i"/>`,
		"fallback": "streamline:desktop-chat-solid",
	});
}

export default Component;

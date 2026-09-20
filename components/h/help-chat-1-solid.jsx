import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krkapmb2v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="krkapmb2v"/>`,
		"fallback": "streamline-flex:help-chat-1-solid",
	});
}

export default Component;

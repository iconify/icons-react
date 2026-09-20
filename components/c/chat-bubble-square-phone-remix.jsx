import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou_tucbqr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ou_tucbqr"/>`,
		"fallback": "streamline-flex:chat-bubble-square-phone-remix",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5wzc0bsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i5wzc0bsq"/>`,
		"fallback": "streamline-flex:chat-bubble-square-phone-solid",
	});
}

export default Component;

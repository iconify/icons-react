import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ludt5vszz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ludt5vszz"/>`,
		"fallback": "streamline-sharp:chat-two-bubbles-oval-solid",
	});
}

export default Component;

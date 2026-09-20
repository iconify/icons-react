import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i72gs7b7u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i72gs7b7u"/>`,
		"fallback": "streamline:discussion-converstion-reply-remix",
	});
}

export default Component;

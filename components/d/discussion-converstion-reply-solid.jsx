import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcw7sev6q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcw7sev6q"/>`,
		"fallback": "streamline:discussion-converstion-reply-solid",
	});
}

export default Component;

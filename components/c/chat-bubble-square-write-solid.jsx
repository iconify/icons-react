import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2r3z0b1a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2r3z0b1a"/>`,
		"fallback": "streamline:chat-bubble-square-write-solid",
	});
}

export default Component;

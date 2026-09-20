import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thsisubtd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="thsisubtd"/>`,
		"fallback": "streamline:chat-bubble-text-square-solid",
	});
}

export default Component;

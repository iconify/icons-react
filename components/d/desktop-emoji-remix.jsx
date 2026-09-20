import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5rln4fwo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t5rln4fwo"/>`,
		"fallback": "streamline:desktop-emoji-remix",
	});
}

export default Component;

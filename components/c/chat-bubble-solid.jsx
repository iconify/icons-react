import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_2501bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_2501bwn"/>`,
		"fallback": "iconoir:chat-bubble-solid",
	});
}

export default Component;

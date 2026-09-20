import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j33_15qmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j33_15qmv"/>`,
		"fallback": "mdi:chat-plus",
	});
}

export default Component;

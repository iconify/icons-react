import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnr8hacgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnr8hacgg"/>`,
		"fallback": "ri:chat-delete-line",
	});
}

export default Component;

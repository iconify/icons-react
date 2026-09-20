import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwqapu5pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwqapu5pq"/>`,
		"fallback": "lets-icons:chat-alt-2-light",
	});
}

export default Component;

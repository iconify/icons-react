import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrdrn2oqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrdrn2oqo"/>`,
		"fallback": "ri:chat-unread-line",
	});
}

export default Component;

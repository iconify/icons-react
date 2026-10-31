import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdcz7gq1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdcz7gq1u"/>`,
		"fallback": "coolicons:chat-circle-dots-fill-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzn4wdozi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzn4wdozi"/>`,
		"fallback": "coolicons:chat-sparkle-round",
	});
}

export default Component;

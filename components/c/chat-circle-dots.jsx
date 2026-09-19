import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpuf8n8va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpuf8n8va"/>`,
		"fallback": "griddy-icons:chat-circle-dots",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vysr3ibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vysr3ibfx"/>`,
		"fallback": "griddy-icons:chat-circle-alert-filled",
	});
}

export default Component;

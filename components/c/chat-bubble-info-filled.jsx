import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clvq9sbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clvq9sbjo"/>`,
		"fallback": "griddy-icons:chat-bubble-info-filled",
	});
}

export default Component;

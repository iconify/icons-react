import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdi4gp9eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdi4gp9eu"/>`,
		"fallback": "griddy-icons:chat-circle-info-filled",
	});
}

export default Component;

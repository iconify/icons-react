import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjm06yq4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjm06yq4p"/>`,
		"fallback": "heroicons-outline:chat-bubble-bottom-center",
	});
}

export default Component;

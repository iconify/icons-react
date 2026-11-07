import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y20x_mi0c.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y20x_mi0c"/><path clip-rule="evenodd" class="x9024bb4v"/>`,
		"fallback": "solar:chat-round-close-outline",
	});
}

export default Component;

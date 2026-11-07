import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sam5gk0fm.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sam5gk0fm"/><path clip-rule="evenodd" class="x9024bb4v"/>`,
		"fallback": "solar:chat-round-add-outline",
	});
}

export default Component;

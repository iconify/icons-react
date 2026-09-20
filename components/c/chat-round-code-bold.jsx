import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2veuy8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ou2veuy8k"/>`,
		"fallback": "solar:chat-round-code-bold",
	});
}

export default Component;

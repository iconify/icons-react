import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfq4xub6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfq4xub6n"/>`,
		"fallback": "griddy-icons:chat-circle-text-filled",
	});
}

export default Component;

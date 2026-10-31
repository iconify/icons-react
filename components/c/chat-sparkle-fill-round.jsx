import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci9iid05n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci9iid05n"/>`,
		"fallback": "coolicons:chat-sparkle-fill-round",
	});
}

export default Component;

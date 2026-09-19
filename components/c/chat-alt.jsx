import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdmzamy-y.css';

const viewBox = {"width":520,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdmzamy-y"/>`,
		"fallback": "ps:chat-alt",
	});
}

export default Component;

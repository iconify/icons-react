import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6kv9-b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6kv9-b_a"/>`,
		"fallback": "coolicons:chat-close-round",
	});
}

export default Component;

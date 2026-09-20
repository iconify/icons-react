import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw9fzjpvh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw9fzjpvh"/>`,
		"fallback": "teenyicons:chat-typing-alt-outline",
	});
}

export default Component;

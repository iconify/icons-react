import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt3m2bate.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt3m2bate"/>`,
		"fallback": "coolicons:chat-check-round",
	});
}

export default Component;

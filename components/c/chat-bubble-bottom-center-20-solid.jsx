import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylwh1bc5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylwh1bc5n"/>`,
		"fallback": "heroicons:chat-bubble-bottom-center-20-solid",
	});
}

export default Component;

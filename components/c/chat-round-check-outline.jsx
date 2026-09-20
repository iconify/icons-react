import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beg3fv-xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="beg3fv-xh"/>`,
		"fallback": "solar:chat-round-check-outline",
	});
}

export default Component;

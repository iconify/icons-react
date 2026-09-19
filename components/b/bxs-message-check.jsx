import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l19c6bchs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l19c6bchs"/>`,
		"fallback": "bx:bxs-message-check",
	});
}

export default Component;

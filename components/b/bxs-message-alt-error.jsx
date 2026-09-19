import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5o2m-7uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5o2m-7uj"/>`,
		"fallback": "bx:bxs-message-alt-error",
	});
}

export default Component;

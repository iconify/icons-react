import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eriqo0v6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eriqo0v6q"/>`,
		"fallback": "bx:bxs-file",
	});
}

export default Component;

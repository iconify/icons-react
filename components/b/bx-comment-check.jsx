import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2qvqe-ii.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2qvqe-ii"/><path class="j1kdqfrps"/>`,
		"fallback": "bx:bx-comment-check",
	});
}

export default Component;

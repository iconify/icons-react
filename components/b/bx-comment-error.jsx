import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4r099b3x.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4r099b3x"/><path class="j1kdqfrps"/>`,
		"fallback": "bx:bx-comment-error",
	});
}

export default Component;

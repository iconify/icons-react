import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x42zgxb_w.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x42zgxb_w"/><path class="j1kdqfrps"/>`,
		"fallback": "bx:comment-x",
	});
}

export default Component;

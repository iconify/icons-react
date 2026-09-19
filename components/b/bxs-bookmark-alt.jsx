import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-6mgzewi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-6mgzewi"/>`,
		"fallback": "bx:bxs-bookmark-alt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auo2y6bas.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auo2y6bas"/>`,
		"fallback": "fxemoji:beating-heart",
	});
}

export default Component;

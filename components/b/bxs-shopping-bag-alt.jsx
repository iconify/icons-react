import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whiou-bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whiou-bow"/>`,
		"fallback": "bx:bxs-shopping-bag-alt",
	});
}

export default Component;

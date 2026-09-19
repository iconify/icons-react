import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up844cc5r.css';
import '../../css/p/p6cb9-b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up844cc5r"/><path class="p6cb9-b_h"/>`,
		"fallback": "bx:bx-book-heart",
	});
}

export default Component;

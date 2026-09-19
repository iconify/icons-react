import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkp8b6b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkp8b6b8m"/>`,
		"fallback": "bx:bxs-book-heart",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx2rbtbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx2rbtbmb"/>`,
		"fallback": "bx:bx-brain",
	});
}

export default Component;

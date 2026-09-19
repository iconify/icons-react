import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d08fjthkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d08fjthkr"/>`,
		"fallback": "bx:bxs-right-arrow-alt",
	});
}

export default Component;

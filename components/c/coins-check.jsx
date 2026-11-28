import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa-81x8rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa-81x8rq"/>`,
		"fallback": "noviair-light:coins-check",
	});
}

export default Component;

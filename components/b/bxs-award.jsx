import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8kaubyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg8kaubyl"/>`,
		"fallback": "bx:bxs-award",
	});
}

export default Component;

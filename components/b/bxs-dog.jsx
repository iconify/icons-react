import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8_l-zb6q.css';
import '../../css/v/v0ztzdxtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8_l-zb6q"/><path class="v0ztzdxtl"/>`,
		"fallback": "bx:bxs-dog",
	});
}

export default Component;

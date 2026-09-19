import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i677w6bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i677w6bog"/>`,
		"fallback": "bx:bxs-capsule",
	});
}

export default Component;

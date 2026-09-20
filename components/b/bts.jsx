import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l60z0rb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l60z0rb1u"/>`,
		"fallback": "token:bts",
	});
}

export default Component;

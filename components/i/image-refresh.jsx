import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3y8m17xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3y8m17xk"/>`,
		"fallback": "noviair:image-refresh",
	});
}

export default Component;

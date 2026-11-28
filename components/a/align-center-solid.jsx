import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igx07ub6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igx07ub6e"/>`,
		"fallback": "iconaut:align-center-solid",
	});
}

export default Component;

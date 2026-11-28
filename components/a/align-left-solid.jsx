import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f82_ylk6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f82_ylk6e"/>`,
		"fallback": "iconaut:align-left-solid",
	});
}

export default Component;

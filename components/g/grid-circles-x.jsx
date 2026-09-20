import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yidkjd_bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yidkjd_bo"/>`,
		"fallback": "keyline-icons:grid-circles-x",
	});
}

export default Component;

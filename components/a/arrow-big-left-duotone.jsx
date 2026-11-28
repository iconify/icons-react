import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk43z12xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xk43z12xx"/>`,
		"fallback": "iconaut:arrow-big-left-duotone",
	});
}

export default Component;

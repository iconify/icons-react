import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4jkx3bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4jkx3bhf"/>`,
		"fallback": "circum:cloud-off",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c26tp36kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c26tp36kj"/>`,
		"fallback": "heroicons-outline:exclamation",
	});
}

export default Component;

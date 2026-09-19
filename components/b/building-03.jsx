import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy8lnwbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy8lnwbgj"/>`,
		"fallback": "ci:building-03",
	});
}

export default Component;

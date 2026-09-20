import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq5q78n-v.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq5q78n-v"/>`,
		"fallback": "jam:arrow-square-down-f",
	});
}

export default Component;

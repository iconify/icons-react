import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydmm0mbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydmm0mbyf"/>`,
		"fallback": "ci:car-auto",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy0iy2rdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy0iy2rdd"/>`,
		"fallback": "thesvg-color:egnyte",
	});
}

export default Component;

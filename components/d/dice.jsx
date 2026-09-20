import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5zec1bxl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5zec1bxl"/>`,
		"fallback": "jam:dice",
	});
}

export default Component;

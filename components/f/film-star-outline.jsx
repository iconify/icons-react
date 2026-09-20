import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylx6y-5zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylx6y-5zv"/>`,
		"fallback": "mdi:film-star-outline",
	});
}

export default Component;

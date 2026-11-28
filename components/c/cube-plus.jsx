import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5jmc0y6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5jmc0y6q"/>`,
		"fallback": "noviair-light:cube-plus",
	});
}

export default Component;

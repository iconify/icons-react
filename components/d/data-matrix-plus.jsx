import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk6ek7b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk6ek7b-q"/>`,
		"fallback": "mdi:data-matrix-plus",
	});
}

export default Component;

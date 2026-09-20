import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2-1yvblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2-1yvblo"/>`,
		"fallback": "solar:chandelier-bold",
	});
}

export default Component;

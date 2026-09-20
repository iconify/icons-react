import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhta4sb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhta4sb6a"/>`,
		"fallback": "solar:alt-arrow-left-bold",
	});
}

export default Component;

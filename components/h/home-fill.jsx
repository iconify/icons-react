import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_1xkq7wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_1xkq7wz"/>`,
		"fallback": "ri:home-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn7cwwokh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn7cwwokh"/>`,
		"fallback": "ri:chess-fill",
	});
}

export default Component;

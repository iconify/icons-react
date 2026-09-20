import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fal4x0qhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fal4x0qhd"/>`,
		"fallback": "ri:align-item-bottom-fill",
	});
}

export default Component;

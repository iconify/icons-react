import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s99b1cbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s99b1cbxy"/>`,
		"fallback": "mdi:briefcase-minus-outline",
	});
}

export default Component;

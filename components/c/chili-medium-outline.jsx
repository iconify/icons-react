import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu90i71ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu90i71ig"/>`,
		"fallback": "mdi:chili-medium-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhv95j8ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhv95j8ok"/>`,
		"fallback": "mdi:head-bulb-outline",
	});
}

export default Component;

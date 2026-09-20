import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5cnq49py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5cnq49py"/>`,
		"fallback": "mdi:favorite-shooting-outline",
	});
}

export default Component;

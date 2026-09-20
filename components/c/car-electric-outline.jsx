import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnam857uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnam857uz"/>`,
		"fallback": "mdi:car-electric-outline",
	});
}

export default Component;

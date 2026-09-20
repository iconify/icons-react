import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1a-1b7oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1a-1b7oz"/>`,
		"fallback": "mdi:car-emergency-brake",
	});
}

export default Component;

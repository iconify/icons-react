import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh3x2sb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh3x2sb7g"/>`,
		"fallback": "mdi:clapperboard-plus-outline",
	});
}

export default Component;

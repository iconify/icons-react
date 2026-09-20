import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxkkv7aav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxkkv7aav"/>`,
		"fallback": "mdi:arrow-top-bold-hexagon-outline",
	});
}

export default Component;

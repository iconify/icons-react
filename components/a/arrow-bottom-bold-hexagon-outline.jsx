import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kon67vble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kon67vble"/>`,
		"fallback": "mdi:arrow-bottom-bold-hexagon-outline",
	});
}

export default Component;

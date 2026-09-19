import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faql0lbhz.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faql0lbhz"/>`,
		"fallback": "zmdi:collection-item",
	});
}

export default Component;

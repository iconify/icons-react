import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnagvx03c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnagvx03c"/>`,
		"fallback": "mdi:bus-wrench",
	});
}

export default Component;

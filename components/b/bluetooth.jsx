import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb3eeh2at.css';

const viewBox = {"width":272,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb3eeh2at"/>`,
		"fallback": "zmdi:bluetooth",
	});
}

export default Component;

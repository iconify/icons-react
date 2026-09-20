import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgfb9-b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgfb9-b1b"/>`,
		"fallback": "mdi:arrow-top-thick",
	});
}

export default Component;

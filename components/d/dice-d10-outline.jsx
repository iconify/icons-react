import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lamx9gjea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lamx9gjea"/>`,
		"fallback": "mdi:dice-d10-outline",
	});
}

export default Component;

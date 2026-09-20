import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa1n06c0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa1n06c0e"/>`,
		"fallback": "mdi:heart-off",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwl4a6cod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwl4a6cod"/>`,
		"fallback": "mdi:heart-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl4k4fpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcl4k4fpu"/>`,
		"fallback": "mdi:arrow-right-bold-circle-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip2018xng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip2018xng"/>`,
		"fallback": "mdi:clock-time-five-outline",
	});
}

export default Component;

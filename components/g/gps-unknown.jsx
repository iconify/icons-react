import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z38zr6ijq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z38zr6ijq"/>`,
		"fallback": "mdi:gps-unknown",
	});
}

export default Component;

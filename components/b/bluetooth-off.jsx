import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if7dj2d5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if7dj2d5k"/>`,
		"fallback": "mdi:bluetooth-off",
	});
}

export default Component;

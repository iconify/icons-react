import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikf5vpbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikf5vpbfu"/>`,
		"fallback": "circum:bell-off",
	});
}

export default Component;

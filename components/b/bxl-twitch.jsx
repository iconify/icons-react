import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el4xv0b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el4xv0b0r"/>`,
		"fallback": "bx:bxl-twitch",
	});
}

export default Component;

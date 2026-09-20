import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkvla1b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkvla1b3c"/>`,
		"fallback": "streamline-ultimate:airplane-mode",
	});
}

export default Component;

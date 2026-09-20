import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7z4fccwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7z4fccwr"/>`,
		"fallback": "mdi:arrow-up-down-bold-outline",
	});
}

export default Component;

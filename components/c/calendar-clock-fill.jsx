import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynhp2xbur.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynhp2xbur"/>`,
		"fallback": "pullo:calendar-clock-fill",
	});
}

export default Component;

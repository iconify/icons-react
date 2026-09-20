import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjbdo-_2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjbdo-_2u"/>`,
		"fallback": "mdi:fan-chevron-up",
	});
}

export default Component;

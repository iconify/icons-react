import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1nqhxb4d.css';
import '../../css/d/dvmdl7-za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1nqhxb4d"/><path class="dvmdl7-za"/>`,
		"fallback": "solar:heart-pulse-2-bold-duotone",
	});
}

export default Component;

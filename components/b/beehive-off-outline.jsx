import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-e0brbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-e0brbqf"/>`,
		"fallback": "mdi:beehive-off-outline",
	});
}

export default Component;

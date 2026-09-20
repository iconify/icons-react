import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waxltl5fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waxltl5fo"/>`,
		"fallback": "mdi:house-thermometer-outline",
	});
}

export default Component;

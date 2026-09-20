import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct6zh5pwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct6zh5pwd"/>`,
		"fallback": "mdi:arrow-right-thin-circle-outline",
	});
}

export default Component;

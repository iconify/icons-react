import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd61v6brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd61v6brm"/>`,
		"fallback": "mdi:car-door-lock",
	});
}

export default Component;

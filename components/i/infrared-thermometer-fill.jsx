import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fab1iab3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fab1iab3h"/>`,
		"fallback": "ri:infrared-thermometer-fill",
	});
}

export default Component;

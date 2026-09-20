import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7ldm2_wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7ldm2_wm"/>`,
		"fallback": "mdi:car-child-seat",
	});
}

export default Component;

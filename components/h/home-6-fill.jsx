import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flbl-5mpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flbl-5mpu"/>`,
		"fallback": "ri:home-6-fill",
	});
}

export default Component;

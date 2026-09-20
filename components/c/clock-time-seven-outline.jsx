import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z72316buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z72316buz"/>`,
		"fallback": "mdi:clock-time-seven-outline",
	});
}

export default Component;

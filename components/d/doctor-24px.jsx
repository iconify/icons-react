import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twbw68b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twbw68b_r"/>`,
		"fallback": "healthicons:doctor-24px",
	});
}

export default Component;

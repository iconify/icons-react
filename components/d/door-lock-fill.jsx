import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2h2y-e_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2h2y-e_k"/>`,
		"fallback": "ri:door-lock-fill",
	});
}

export default Component;

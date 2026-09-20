import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb6i78bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb6i78bdl"/>`,
		"fallback": "ri:e-bike-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2q9le6mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2q9le6mu"/>`,
		"fallback": "mdi:box-download",
	});
}

export default Component;

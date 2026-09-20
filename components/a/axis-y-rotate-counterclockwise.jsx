import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wotr_1b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wotr_1b6q"/>`,
		"fallback": "mdi:axis-y-rotate-counterclockwise",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqms5zblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqms5zblh"/>`,
		"fallback": "mdi:debug-step-into",
	});
}

export default Component;

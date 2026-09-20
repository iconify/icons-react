import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asln6lbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asln6lbnm"/>`,
		"fallback": "mdi:freehand-line",
	});
}

export default Component;

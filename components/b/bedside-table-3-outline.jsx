import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq7e6332b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq7e6332b"/>`,
		"fallback": "solar:bedside-table-3-outline",
	});
}

export default Component;

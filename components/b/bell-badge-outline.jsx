import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb6ctrb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb6ctrb9b"/>`,
		"fallback": "mdi:bell-badge-outline",
	});
}

export default Component;

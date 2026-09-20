import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1vx7j78p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1vx7j78p"/>`,
		"fallback": "mdi:cloud-xml",
	});
}

export default Component;

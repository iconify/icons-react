import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fibqiob8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fibqiob8d"/>`,
		"fallback": "mdi:arrow-bottom-left-bold-box-outline",
	});
}

export default Component;

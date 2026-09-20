import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uelcvlbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uelcvlbpo"/>`,
		"fallback": "mdi:battery-charging-full",
	});
}

export default Component;

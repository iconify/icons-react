import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaod-urcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaod-urcv"/>`,
		"fallback": "mdi:dishwasher-alert",
	});
}

export default Component;

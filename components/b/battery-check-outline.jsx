import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6bbz-whr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6bbz-whr"/>`,
		"fallback": "mdi:battery-check-outline",
	});
}

export default Component;

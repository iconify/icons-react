import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqpln8bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqpln8bba"/>`,
		"fallback": "mdi:car-3-plus",
	});
}

export default Component;

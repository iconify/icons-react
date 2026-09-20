import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0dvk7b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0dvk7b2l"/>`,
		"fallback": "mdi:arrow-down-bold-box",
	});
}

export default Component;

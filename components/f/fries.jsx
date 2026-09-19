import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd9m8rbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd9m8rbol"/>`,
		"fallback": "circum:fries",
	});
}

export default Component;

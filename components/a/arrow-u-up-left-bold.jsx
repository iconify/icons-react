import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwxp3gbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwxp3gbnb"/>`,
		"fallback": "mdi:arrow-u-up-left-bold",
	});
}

export default Component;

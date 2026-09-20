import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbkr8bjbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbkr8bjbf"/>`,
		"fallback": "mdi:arrow-left-thin-circle-outline",
	});
}

export default Component;

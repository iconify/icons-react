import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xklulsq7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xklulsq7v"/>`,
		"fallback": "mdi:credit-card-lock",
	});
}

export default Component;

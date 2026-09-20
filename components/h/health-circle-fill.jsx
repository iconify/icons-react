import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-bbp7lwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-bbp7lwo"/>`,
		"fallback": "mage:health-circle-fill",
	});
}

export default Component;

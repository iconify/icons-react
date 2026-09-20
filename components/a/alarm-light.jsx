import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clh0w3bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clh0w3bpa"/>`,
		"fallback": "mdi:alarm-light",
	});
}

export default Component;

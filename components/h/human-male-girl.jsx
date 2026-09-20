import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrj1l8jwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrj1l8jwh"/>`,
		"fallback": "mdi:human-male-girl",
	});
}

export default Component;

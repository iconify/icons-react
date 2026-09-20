import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gub3n7bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gub3n7bnh"/>`,
		"fallback": "mdi:camera-switch",
	});
}

export default Component;

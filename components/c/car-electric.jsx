import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnckoc04l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnckoc04l"/>`,
		"fallback": "mdi:car-electric",
	});
}

export default Component;

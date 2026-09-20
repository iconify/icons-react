import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru0y2vl2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru0y2vl2z"/>`,
		"fallback": "mdi:iframe-brackets-outline",
	});
}

export default Component;

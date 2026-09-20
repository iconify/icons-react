import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2wu4hat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb2wu4hat"/>`,
		"fallback": "ri:heart-pulse-fill",
	});
}

export default Component;

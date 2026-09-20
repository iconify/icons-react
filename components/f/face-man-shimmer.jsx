import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq07mm04a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq07mm04a"/>`,
		"fallback": "mdi:face-man-shimmer",
	});
}

export default Component;

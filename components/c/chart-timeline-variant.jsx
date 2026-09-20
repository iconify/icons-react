import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy4j7ebwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy4j7ebwi"/>`,
		"fallback": "mdi:chart-timeline-variant",
	});
}

export default Component;

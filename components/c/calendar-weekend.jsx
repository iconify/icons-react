import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz69eqhxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz69eqhxs"/>`,
		"fallback": "mdi:calendar-weekend",
	});
}

export default Component;

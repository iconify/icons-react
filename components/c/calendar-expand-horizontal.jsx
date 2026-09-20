import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhxa1bb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhxa1bb0d"/>`,
		"fallback": "mdi:calendar-expand-horizontal",
	});
}

export default Component;

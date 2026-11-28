import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3zq5zl1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3zq5zl1m"/>`,
		"fallback": "noviair:calendar-gear",
	});
}

export default Component;

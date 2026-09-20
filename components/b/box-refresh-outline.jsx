import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou99r_79m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou99r_79m"/>`,
		"fallback": "mdi:box-refresh-outline",
	});
}

export default Component;

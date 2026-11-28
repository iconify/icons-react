import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/manu--2ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="manu--2ps"/>`,
		"fallback": "noviair:calendar-plus",
	});
}

export default Component;

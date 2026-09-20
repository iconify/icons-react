import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmo_l8brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmo_l8brs"/>`,
		"fallback": "simple-icons:adventofcode",
	});
}

export default Component;

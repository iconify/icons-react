import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc3-dh2aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc3-dh2aj"/>`,
		"fallback": "noviair:cookie-off",
	});
}

export default Component;

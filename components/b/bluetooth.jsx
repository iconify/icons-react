import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd3h-8q2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd3h-8q2e"/>`,
		"fallback": "circum:bluetooth",
	});
}

export default Component;

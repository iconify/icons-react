import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vifd6_bbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vifd6_bbu"/>`,
		"fallback": "subway:calendar-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leze99baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leze99baj"/>`,
		"fallback": "noviair-light:calendar-plus",
	});
}

export default Component;

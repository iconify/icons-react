import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wma8swbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wma8swbtb"/>`,
		"fallback": "ri:arrow-down-s-fill",
	});
}

export default Component;

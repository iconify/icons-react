import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvjhtdbrr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvjhtdbrr"/>`,
		"fallback": "roentgen:city-limit-sign",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx2eyn5ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx2eyn5ev"/>`,
		"fallback": "mdi:arrow-down-right",
	});
}

export default Component;

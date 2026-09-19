import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx1mgel_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx1mgel_c"/>`,
		"fallback": "griddy-icons:battery-vertical-empty",
	});
}

export default Component;

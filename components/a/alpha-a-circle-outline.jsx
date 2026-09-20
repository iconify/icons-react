import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te1q50b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te1q50b9c"/>`,
		"fallback": "mdi:alpha-a-circle-outline",
	});
}

export default Component;

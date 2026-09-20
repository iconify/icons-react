import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv97fzbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv97fzbea"/>`,
		"fallback": "mdi:fuel-cell",
	});
}

export default Component;

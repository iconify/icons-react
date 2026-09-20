import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mor6mhbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mor6mhbjv"/>`,
		"fallback": "mdi:credit-card-multiple",
	});
}

export default Component;

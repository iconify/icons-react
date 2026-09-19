import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2avr2bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2avr2bzb"/>`,
		"fallback": "boxicons:arrow-down-stroke-square-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h7y036pjf.css';
import '../../css/m/m7x-ygbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h7y036pjf"/><path class="m7x-ygbsd"/></g>`,
		"fallback": "iconoir:bus",
	});
}

export default Component;

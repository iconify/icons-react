import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shd05hbli.css';
import '../../css/m/mrwq9zbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="shd05hbli"/><path class="mrwq9zbjl"/></g>`,
		"fallback": "solar:home-smile-angle-linear",
	});
}

export default Component;

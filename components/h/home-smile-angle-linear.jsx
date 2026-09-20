import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcw-d7b1r.css';
import '../../css/m/mrwq9zbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcw-d7b1r"/><path class="mrwq9zbjl"/></g>`,
		"fallback": "solar:home-smile-angle-linear",
	});
}

export default Component;

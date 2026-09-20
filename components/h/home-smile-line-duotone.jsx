import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fbtth2tza.css';
import '../../css/m/mrwq9zbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fbtth2tza"/><path class="mrwq9zbjl"/></g>`,
		"fallback": "solar:home-smile-line-duotone",
	});
}

export default Component;

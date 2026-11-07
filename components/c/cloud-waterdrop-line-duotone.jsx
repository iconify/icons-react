import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qy-t49-ig.css';
import '../../css/m/mp06uz8ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qy-t49-ig"/><path class="mp06uz8ka"/></g>`,
		"fallback": "solar:cloud-waterdrop-line-duotone",
	});
}

export default Component;

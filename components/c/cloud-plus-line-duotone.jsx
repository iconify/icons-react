import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qy-t49-ig.css';
import '../../css/h/he-som29x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qy-t49-ig"/><path class="he-som29x"/></g>`,
		"fallback": "solar:cloud-plus-line-duotone",
	});
}

export default Component;

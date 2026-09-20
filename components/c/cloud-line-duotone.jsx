import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v2v2d0b3k.css';
import '../../css/i/ivl2cso-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v2v2d0b3k"/><path class="ivl2cso-i"/></g>`,
		"fallback": "solar:cloud-line-duotone",
	});
}

export default Component;

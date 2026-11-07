import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lt87iveio.css';
import '../../css/v/vm4180bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lt87iveio"/><path class="vm4180bfn"/></g>`,
		"fallback": "solar:grid-3x2-line-duotone",
	});
}

export default Component;

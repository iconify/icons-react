import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ixph6tbsi.css';
import '../../css/l/lasg3lkdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ixph6tbsi"/><path class="lasg3lkdc"/></g>`,
		"fallback": "solar:box-minimalistic-linear",
	});
}

export default Component;

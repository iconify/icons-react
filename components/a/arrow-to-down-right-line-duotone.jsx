import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mbxu6qbgd.css';
import '../../css/f/fk5jksbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mbxu6qbgd"/><path class="fk5jksbbf"/></g>`,
		"fallback": "solar:arrow-to-down-right-line-duotone",
	});
}

export default Component;

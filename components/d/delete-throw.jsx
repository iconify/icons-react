import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-4vkdb5j.css';
import '../../css/f/fhnp4c6xr.css';
import '../../css/e/eojnwibxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-4vkdb5j"/><path class="fhnp4c6xr"/><path class="eojnwibxl"/></g>`,
		"fallback": "hugeicons:delete-throw",
	});
}

export default Component;

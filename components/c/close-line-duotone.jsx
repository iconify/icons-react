import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jm4-4_b1b.css';
import '../../css/u/urwe8bb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jm4-4_b1b"/><path class="urwe8bb9z"/></g>`,
		"fallback": "solar:close-line-duotone",
	});
}

export default Component;

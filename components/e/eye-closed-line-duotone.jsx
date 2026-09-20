import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e08679bhk.css';
import '../../css/u/u78g8rg8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e08679bhk"/><path class="u78g8rg8y"/></g>`,
		"fallback": "solar:eye-closed-line-duotone",
	});
}

export default Component;

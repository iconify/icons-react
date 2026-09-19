import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uk6uqvbik.css';
import '../../css/i/i0rcg7b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uk6uqvbik"/><path class="i0rcg7b2m"/></g>`,
		"fallback": "hugeicons:artboard-tool",
	});
}

export default Component;

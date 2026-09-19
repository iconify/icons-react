import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aijjeccib.css';
import '../../css/f/f1fxxitfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aijjeccib"/><path class="f1fxxitfx"/></g>`,
		"fallback": "hugeicons:armchair",
	});
}

export default Component;

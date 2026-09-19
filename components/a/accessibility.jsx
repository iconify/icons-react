import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/stgazfbiv.css';
import '../../css/k/kskz6e47w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="stgazfbiv"/><path class="kskz6e47w"/></g>`,
		"fallback": "hugeicons:accessibility",
	});
}

export default Component;

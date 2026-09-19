import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mkypzpbha.css';
import '../../css/p/pfm93vb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mkypzpbha"/><path class="pfm93vb3g"/></g>`,
		"fallback": "hugeicons:fishing-rod",
	});
}

export default Component;

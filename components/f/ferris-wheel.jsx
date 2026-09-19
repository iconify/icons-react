import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v90gbqbox.css';
import '../../css/c/c7voef_mm.css';
import '../../css/i/i7-tpfahw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="v90gbqbox"/><path class="c7voef_mm"/><path class="i7-tpfahw"/></g>`,
		"fallback": "hugeicons:ferris-wheel",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zj819o97n.css';
import '../../css/l/l-stimtrd.css';
import '../../css/h/h28to3_zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="zj819o97n"/><path class="l-stimtrd"/><path class="h28to3_zm"/></g>`,
		"fallback": "proicons:credit-card",
	});
}

export default Component;

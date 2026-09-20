import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c020a4bmu.css';
import '../../css/t/tef83mb6y.css';
import '../../css/t/tk6t9fbyh.css';
import '../../css/j/jxdwkm1he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c020a4bmu"/><path class="tef83mb6y"/><path class="tk6t9fbyh"/><path class="jxdwkm1he"/></g>`,
		"fallback": "solar:cup-paper-linear",
	});
}

export default Component;

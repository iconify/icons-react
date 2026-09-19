import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4nc1v0sz.css';
import '../../css/b/btywncb6s.css';
import '../../css/f/f3sds_beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k4nc1v0sz"/><path class="btywncb6s"/><path class="f3sds_beg"/></g>`,
		"fallback": "iconoir:green-bus",
	});
}

export default Component;

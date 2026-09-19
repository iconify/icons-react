import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnp6a-b8y.css';
import '../../css/d/d56_pbcee.css';
import '../../css/w/w_l_yzbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vnp6a-b8y"/><path class="d56_pbcee"/><path class="w_l_yzbyu"/></g>`,
		"fallback": "hugeicons:arrow-left-to-line",
	});
}

export default Component;

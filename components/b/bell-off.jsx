import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qxk09zbgn.css';
import '../../css/t/tt7ewmbov.css';
import '../../css/w/w6ht4_aov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qxk09zbgn"/><path class="tt7ewmbov"/><path class="w6ht4_aov"/></g>`,
		"fallback": "proicons:bell-off",
	});
}

export default Component;

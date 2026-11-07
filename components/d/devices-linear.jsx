import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qwzcgabfh.css';
import '../../css/u/ubda_ab4e.css';
import '../../css/p/pbcwo2bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qwzcgabfh"/><path class="ubda_ab4e"/><path class="pbcwo2bql"/></g>`,
		"fallback": "solar:devices-linear",
	});
}

export default Component;

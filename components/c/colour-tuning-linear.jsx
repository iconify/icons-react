import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jzp6r4b6x.css';
import '../../css/u/uk8ks_p6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jzp6r4b6x"/><path class="uk8ks_p6o"/></g>`,
		"fallback": "solar:colour-tuning-linear",
	});
}

export default Component;

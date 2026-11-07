import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ttvvgvxaz.css';
import '../../css/n/nj09urbqm.css';
import '../../css/w/w5tcgqavt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ttvvgvxaz"/><path class="nj09urbqm"/><path class="w5tcgqavt"/></g>`,
		"fallback": "solar:balls-line-duotone",
	});
}

export default Component;

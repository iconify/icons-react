import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n81lr3_mt.css';
import '../../css/j/jy-ahqblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n81lr3_mt"/><path class="jy-ahqblv"/></g>`,
		"fallback": "solar:crown-minimalistic-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mah77vmqo.css';
import '../../css/n/nmny9o5et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mah77vmqo"/><path class="nmny9o5et"/></g>`,
		"fallback": "solar:forbidden-line-duotone",
	});
}

export default Component;

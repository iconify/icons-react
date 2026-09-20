import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u7lv9dhwb.css';
import '../../css/e/e273j40pi.css';
import '../../css/t/ti8_utzrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u7lv9dhwb"/><path class="e273j40pi"/><path class="ti8_utzrk"/></g>`,
		"fallback": "solar:cart-large-minimalistic-outline",
	});
}

export default Component;

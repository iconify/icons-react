import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w289mkbre.css';
import '../../css/f/f5d9bsb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w289mkbre"/><path class="f5d9bsb_o"/></g>`,
		"fallback": "mage:folder-minus",
	});
}

export default Component;

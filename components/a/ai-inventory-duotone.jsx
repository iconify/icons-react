import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5ombin6z.css';
import '../../css/e/evj8um96i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5ombin6z"/><path class="evj8um96i"/></g>`,
		"fallback": "si:ai-inventory-duotone",
	});
}

export default Component;

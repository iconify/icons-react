import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ntddo3b1d.css';
import '../../css/w/wojb86weh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ntddo3b1d"/><path class="wojb86weh"/></g>`,
		"fallback": "solar:folder-favourite-star-linear",
	});
}

export default Component;

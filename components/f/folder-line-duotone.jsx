import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2z4fbcpe.css';
import '../../css/v/v21qiwb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2z4fbcpe"/><path class="v21qiwb4s"/></g>`,
		"fallback": "solar:folder-line-duotone",
	});
}

export default Component;

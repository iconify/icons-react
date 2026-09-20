import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ow5werb6a.css';
import '../../css/c/ckjhmh01d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ow5werb6a"/><path class="ckjhmh01d"/></g>`,
		"fallback": "solar:flame-line-duotone",
	});
}

export default Component;

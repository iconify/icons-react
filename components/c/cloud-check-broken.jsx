import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z54hrlbul.css';
import '../../css/v/vmkus2vit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z54hrlbul"/><path class="vmkus2vit"/></g>`,
		"fallback": "solar:cloud-check-broken",
	});
}

export default Component;

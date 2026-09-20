import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rh43wjo-k.css';
import '../../css/h/he-som29x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rh43wjo-k"/><path class="he-som29x"/></g>`,
		"fallback": "solar:cloud-plus-linear",
	});
}

export default Component;

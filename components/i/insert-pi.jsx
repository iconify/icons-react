import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v10bhlb1p.css';
import '../../css/f/f9o0vpbpo.css';
import '../../css/m/mcrfs6b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v10bhlb1p"/><path class="f9o0vpbpo"/><path class="mcrfs6b7c"/></g>`,
		"fallback": "hugeicons:insert-pi",
	});
}

export default Component;

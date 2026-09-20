import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rh43wjo-k.css';
import '../../css/e/e9xe4mm9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rh43wjo-k"/><path class="e9xe4mm9e"/></g>`,
		"fallback": "solar:cloud-cross-linear",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a6d889luc.css';
import '../../css/k/k2ohuq6ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a6d889luc"/><path class="k2ohuq6ch"/></g>`,
		"fallback": "solar:heart-pulse-broken",
	});
}

export default Component;

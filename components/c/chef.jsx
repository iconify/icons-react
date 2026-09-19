import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bg99gz3kl.css';
import '../../css/b/ba-w65b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bg99gz3kl"/><path class="ba-w65b-v"/></g>`,
		"fallback": "hugeicons:chef",
	});
}

export default Component;

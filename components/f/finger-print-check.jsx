import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/btqg7dzki.css';
import '../../css/f/f-3-rl1pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="btqg7dzki"/><path class="f-3-rl1pp"/></g>`,
		"fallback": "hugeicons:finger-print-check",
	});
}

export default Component;

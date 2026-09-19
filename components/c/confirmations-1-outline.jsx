import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/i5_k05bed.css';
import '../../css/w/wns8gdbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="i5_k05bed"/><path class="wns8gdbbc"/></g>`,
		"fallback": "bitcoin-icons:confirmations-1-outline",
	});
}

export default Component;

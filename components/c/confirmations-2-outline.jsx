import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f2gi23jtg.css';
import '../../css/u/u1q7wbbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="f2gi23jtg"/><path class="u1q7wbbza"/></g>`,
		"fallback": "bitcoin-icons:confirmations-2-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e7h30lwyy.css';
import '../../css/b/by0inuboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e7h30lwyy"/><path class="by0inuboi"/></g>`,
		"fallback": "hugeicons:flip-right",
	});
}

export default Component;

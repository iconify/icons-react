import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fe3jdq_kg.css';
import '../../css/h/h1diw3b2e.css';
import '../../css/n/np4yc_oid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fe3jdq_kg"/><path class="h1diw3b2e"/><path class="np4yc_oid"/></g>`,
		"fallback": "hugeicons:insert-column-right",
	});
}

export default Component;

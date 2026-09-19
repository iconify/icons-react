import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i5bdd_bli.css';
import '../../css/a/ar820ss9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i5bdd_bli"/><path class="ar820ss9z"/></g>`,
		"fallback": "hugeicons:brain",
	});
}

export default Component;

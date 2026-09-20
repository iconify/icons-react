import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jdby9gq-h.css';
import '../../css/o/o0rbffbmi.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jdby9gq-h"/><path class="o0rbffbmi"/><path class="i4dcgmbin"/></g>`,
		"fallback": "solar:folder-lock-broken",
	});
}

export default Component;

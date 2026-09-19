import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i39swlb4j.css';
import '../../css/w/w76zkvm7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i39swlb4j"/><path class="w76zkvm7e"/></g>`,
		"fallback": "hugeicons:diamond-02",
	});
}

export default Component;

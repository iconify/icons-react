import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gc_t72b9a.css';
import '../../css/h/h2ld88k5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gc_t72b9a"/><path class="h2ld88k5p"/></g>`,
		"fallback": "hugeicons:group-01",
	});
}

export default Component;

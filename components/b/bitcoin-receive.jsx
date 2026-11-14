import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwyq3obtr.css';
import '../../css/h/h-blswg_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gwyq3obtr"/><path class="h-blswg_t"/></g>`,
		"fallback": "hugeicons:bitcoin-receive",
	});
}

export default Component;

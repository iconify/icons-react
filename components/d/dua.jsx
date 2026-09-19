import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lom6tkt7o.css';
import '../../css/e/exw8c4mtv.css';
import '../../css/p/pzgcelb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lom6tkt7o"/><path class="exw8c4mtv"/><path class="pzgcelb8s"/></g>`,
		"fallback": "hugeicons:dua",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i7brq-b4x.css';
import '../../css/l/lsn9rkeza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i7brq-b4x"/><path class="lsn9rkeza"/></g>`,
		"fallback": "solar:crown-star-broken",
	});
}

export default Component;

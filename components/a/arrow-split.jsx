import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kysfkujjq.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kysfkujjq"/>`,
		"fallback": "zmdi:arrow-split",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmfqr_b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmfqr_b9k"/>`,
		"fallback": "hugeicons:bitcoin-graph",
	});
}

export default Component;

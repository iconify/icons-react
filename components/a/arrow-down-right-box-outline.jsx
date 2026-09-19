import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nffh7rbfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nffh7rbfq"/>`,
		"fallback": "ion:arrow-down-right-box-outline",
	});
}

export default Component;

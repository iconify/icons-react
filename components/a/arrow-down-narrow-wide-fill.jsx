import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz55x2b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz55x2b2n"/>`,
		"fallback": "mingcute:arrow-down-narrow-wide-fill",
	});
}

export default Component;

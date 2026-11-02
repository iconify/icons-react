import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0361ybcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0361ybcs"/>`,
		"fallback": "mingcute:angry-fill",
	});
}

export default Component;

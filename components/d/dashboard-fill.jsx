import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9gxq5xmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9gxq5xmr"/>`,
		"fallback": "mingcute:dashboard-fill",
	});
}

export default Component;

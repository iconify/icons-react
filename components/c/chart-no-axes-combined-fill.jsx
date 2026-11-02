import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yao8nb-za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yao8nb-za"/>`,
		"fallback": "mingcute:chart-no-axes-combined-fill",
	});
}

export default Component;

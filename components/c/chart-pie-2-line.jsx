import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6vi645_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6vi645_j"/>`,
		"fallback": "mingcute:chart-pie-2-line",
	});
}

export default Component;

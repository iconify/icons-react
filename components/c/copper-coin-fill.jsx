import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqorgk93m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqorgk93m"/>`,
		"fallback": "mingcute:copper-coin-fill",
	});
}

export default Component;

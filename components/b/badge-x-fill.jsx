import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x42n11b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x42n11b_y"/>`,
		"fallback": "mingcute:badge-x-fill",
	});
}

export default Component;

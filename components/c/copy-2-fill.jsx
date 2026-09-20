import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0a56fpvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0a56fpvi"/>`,
		"fallback": "mingcute:copy-2-fill",
	});
}

export default Component;

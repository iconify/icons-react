import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbmj_suox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbmj_suox"/>`,
		"fallback": "mingcute:bookmark-check-fill",
	});
}

export default Component;

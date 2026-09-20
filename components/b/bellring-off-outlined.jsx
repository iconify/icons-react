import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ekrf_pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ekrf_pr"/>`,
		"fallback": "weui:bellring-off-outlined",
	});
}

export default Component;

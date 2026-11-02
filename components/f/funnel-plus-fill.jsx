import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rve_w0bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rve_w0bfk"/>`,
		"fallback": "mingcute:funnel-plus-fill",
	});
}

export default Component;

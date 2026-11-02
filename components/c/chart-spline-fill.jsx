import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvgql0brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvgql0brw"/>`,
		"fallback": "mingcute:chart-spline-fill",
	});
}

export default Component;

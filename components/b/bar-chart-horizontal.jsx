import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyhw9eb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyhw9eb6h"/>`,
		"fallback": "ci:bar-chart-horizontal",
	});
}

export default Component;

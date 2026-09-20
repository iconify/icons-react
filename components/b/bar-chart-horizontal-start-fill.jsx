import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-m7hy1dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-m7hy1dc"/>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-fill",
	});
}

export default Component;

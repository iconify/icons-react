import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3xuwrd7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3xuwrd7x"/>`,
		"fallback": "mage:dashboard-circle-chart-fill",
	});
}

export default Component;

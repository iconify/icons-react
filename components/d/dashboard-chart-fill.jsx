import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoi-wib1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoi-wib1s"/>`,
		"fallback": "mage:dashboard-chart-fill",
	});
}

export default Component;

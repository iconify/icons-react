import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogcyy44xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogcyy44xt"/>`,
		"fallback": "healthicons:chart-cured-decreasing-outline-24px",
	});
}

export default Component;

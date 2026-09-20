import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy06a2osb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy06a2osb"/>`,
		"fallback": "ri:file-chart-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erwi4obyy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erwi4obyy"/>`,
		"fallback": "garden:growth-chart-fill-12",
	});
}

export default Component;

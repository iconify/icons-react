import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo70snbfl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo70snbfl"/>`,
		"fallback": "garden:bar-chart-square-fill-20",
	});
}

export default Component;

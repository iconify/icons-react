import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py5kzrbnm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py5kzrbnm"/>`,
		"fallback": "garden:bar-chart-fill-12",
	});
}

export default Component;

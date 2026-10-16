import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhkwq9b2s.css';
import '../../css/h/hjfbf5arh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhkwq9b2s"/><path class="hjfbf5arh"/>`,
		"fallback": "energy-icons:antenna-20-bold",
	});
}

export default Component;

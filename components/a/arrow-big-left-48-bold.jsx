import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4coe1bze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4coe1bze"/>`,
		"fallback": "energy-icons:arrow-big-left-48-bold",
	});
}

export default Component;

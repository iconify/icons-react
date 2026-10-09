import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4vli7ncu.css';
import '../../css/y/yrudknc6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4vli7ncu"/><path class="yrudknc6x"/>`,
		"fallback": "energy-icons:crosshair-48-bold",
	});
}

export default Component;

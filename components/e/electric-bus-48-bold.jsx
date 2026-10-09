import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5pdqgm9m.css';
import '../../css/c/ctik4kd5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5pdqgm9m"/><path class="ctik4kd5n"/>`,
		"fallback": "energy-icons:electric-bus-48-bold",
	});
}

export default Component;

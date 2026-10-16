import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns5zs0vev.css';
import '../../css/q/qdjmx6jro.css';
import '../../css/y/yaab6pb7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns5zs0vev"/><path class="qdjmx6jro"/><path class="yaab6pb7b"/>`,
		"fallback": "energy-icons:battery-health-48-bold",
	});
}

export default Component;

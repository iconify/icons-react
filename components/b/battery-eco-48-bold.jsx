import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns5zs0vev.css';
import '../../css/q/qdjmx6jro.css';
import '../../css/w/w_d0l6k7d.css';
import '../../css/i/ikdwhibgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns5zs0vev"/><path class="qdjmx6jro"/><path class="w_d0l6k7d"/><path class="ikdwhibgf"/>`,
		"fallback": "energy-icons:battery-eco-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m67zmkbra.css';
import '../../css/v/v2pxd9boo.css';
import '../../css/q/qj3hxybqm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m67zmkbra"/><path class="v2pxd9boo"/><path class="qj3hxybqm"/>`,
		"fallback": "energy-icons:e-scooter-20-bold",
	});
}

export default Component;

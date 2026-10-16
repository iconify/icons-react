import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx_o-7mra.css';
import '../../css/x/xonpjubig.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx_o-7mra"/><path class="xonpjubig"/>`,
		"fallback": "energy-icons:electric-boat-20-bold",
	});
}

export default Component;

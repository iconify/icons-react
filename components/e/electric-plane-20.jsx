import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u75ne53rx.css';
import '../../css/q/q0cgw-bmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u75ne53rx"/><path class="q0cgw-bmf"/>`,
		"fallback": "energy-icons:electric-plane-20",
	});
}

export default Component;

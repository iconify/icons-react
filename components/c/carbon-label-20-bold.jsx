import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rul6h_x9m.css';
import '../../css/h/hgjw24b6d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rul6h_x9m"/><path class="hgjw24b6d"/>`,
		"fallback": "energy-icons:carbon-label-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6ltpbg0v.css';
import '../../css/t/t_7rprl1m.css';
import '../../css/k/ketn0_oyj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6ltpbg0v"/><path class="t_7rprl1m"/><path class="ketn0_oyj"/>`,
		"fallback": "energy-icons:electric-car-20-bold",
	});
}

export default Component;

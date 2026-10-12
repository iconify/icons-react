import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncnjsrrtg.css';
import '../../css/m/mo1ard8kh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncnjsrrtg"/><path class="mo1ard8kh"/>`,
		"fallback": "energy-icons:gearbox-20-bold",
	});
}

export default Component;

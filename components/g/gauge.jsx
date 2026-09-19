import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu8xy3b1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu8xy3b1d"/>`,
		"fallback": "fa6-solid:gauge",
	});
}

export default Component;

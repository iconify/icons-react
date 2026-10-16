import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feg1xxbdu.css';
import '../../css/c/cl7b560dd.css';
import '../../css/o/ozxg8x4ce.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feg1xxbdu"/><path class="cl7b560dd"/><path class="ozxg8x4ce"/>`,
		"fallback": "energy-icons:brine-pond-20-bold",
	});
}

export default Component;

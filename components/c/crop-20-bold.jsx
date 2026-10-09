import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs8-z_yps.css';
import '../../css/e/ezgqvohnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs8-z_yps"/><path class="ezgqvohnj"/>`,
		"fallback": "energy-icons:crop-20-bold",
	});
}

export default Component;

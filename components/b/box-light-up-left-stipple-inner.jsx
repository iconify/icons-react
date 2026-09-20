import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_p8usboh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_p8usboh"/>`,
		"fallback": "memory:box-light-up-left-stipple-inner",
	});
}

export default Component;

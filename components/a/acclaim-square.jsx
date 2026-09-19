import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7usbhbpi.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7usbhbpi"/>`,
		"fallback": "academicons:acclaim-square",
	});
}

export default Component;

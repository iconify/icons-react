import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngi88-baq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngi88-baq"/>`,
		"fallback": "fa-brands:first-order",
	});
}

export default Component;

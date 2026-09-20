import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiv-hu0xx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiv-hu0xx"/>`,
		"fallback": "subway:euro",
	});
}

export default Component;

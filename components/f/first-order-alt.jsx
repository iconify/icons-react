import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v216tbc8a.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v216tbc8a"/>`,
		"fallback": "fa6-brands:first-order-alt",
	});
}

export default Component;

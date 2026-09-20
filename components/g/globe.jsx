import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfw64ib8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfw64ib8u"/>`,
		"fallback": "raphael:globe",
	});
}

export default Component;

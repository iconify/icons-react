import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5j01ib0r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5j01ib0r"/>`,
		"fallback": "pullo:dumpster",
	});
}

export default Component;

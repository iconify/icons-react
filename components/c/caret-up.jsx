import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-6mogbuf.css';

const viewBox = {"width":216,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-6mogbuf"/>`,
		"fallback": "zmdi:caret-up",
	});
}

export default Component;

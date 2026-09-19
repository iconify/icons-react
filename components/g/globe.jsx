import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udy9dlbbl.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udy9dlbbl"/>`,
		"fallback": "vs:globe",
	});
}

export default Component;

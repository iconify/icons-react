import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc0gd3b0i.css';
import '../../css/d/d3_4f-5he.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc0gd3b0i"/><path class="d3_4f-5he"/>`,
		"fallback": "ion:disc",
	});
}

export default Component;

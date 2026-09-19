import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucpq15tnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucpq15tnb"/>`,
		"fallback": "ion:chevron-expand-sharp",
	});
}

export default Component;

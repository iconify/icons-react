import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzo-h1bfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzo-h1bfn"/>`,
		"fallback": "la:coins",
	});
}

export default Component;

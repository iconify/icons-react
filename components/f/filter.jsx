import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx362ib6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx362ib6o"/>`,
		"fallback": "la:filter",
	});
}

export default Component;

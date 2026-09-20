import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0v2cdcqr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0v2cdcqr"/>`,
		"fallback": "la:grin-squint-tears",
	});
}

export default Component;

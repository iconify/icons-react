import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz9exbb3k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz9exbb3k"/>`,
		"fallback": "la:file-signature",
	});
}

export default Component;

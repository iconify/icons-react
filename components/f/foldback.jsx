import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1zlwfbgx.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1zlwfbgx"/>`,
		"fallback": "fad:foldback",
	});
}

export default Component;

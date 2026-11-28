import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3ffybak.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3ffybak"/>`,
		"fallback": "pullo:clipboard-check",
	});
}

export default Component;

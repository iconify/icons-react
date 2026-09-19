import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b___szmht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b___szmht"/>`,
		"fallback": "famicons:bluetooth-outline",
	});
}

export default Component;

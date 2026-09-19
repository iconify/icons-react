import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nluxe8cbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nluxe8cbz"/>`,
		"fallback": "cil:arrow-thick-from-left",
	});
}

export default Component;

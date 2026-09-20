import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp2y9kbqy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp2y9kbqy"/>`,
		"fallback": "radix-icons:disc",
	});
}

export default Component;

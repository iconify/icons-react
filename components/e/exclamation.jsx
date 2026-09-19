import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-kyixbrk.css';

const viewBox = {"width":128,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-kyixbrk"/>`,
		"fallback": "fa6-solid:exclamation",
	});
}

export default Component;

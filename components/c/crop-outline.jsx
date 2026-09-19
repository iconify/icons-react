import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev1fg5bdw.css';
import '../../css/j/j8_u0x2hx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev1fg5bdw"/><path class="j8_u0x2hx"/>`,
		"fallback": "famicons:crop-outline",
	});
}

export default Component;

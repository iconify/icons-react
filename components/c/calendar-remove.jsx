import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccyoe_b4h.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccyoe_b4h"/>`,
		"fallback": "system-uicons:calendar-remove",
	});
}

export default Component;

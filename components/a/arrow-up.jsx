import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6t5c-oxo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6t5c-oxo"/>`,
		"fallback": "system-uicons:arrow-up",
	});
}

export default Component;

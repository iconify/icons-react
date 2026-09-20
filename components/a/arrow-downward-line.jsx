import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm_j1ib0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm_j1ib0e"/>`,
		"fallback": "si:arrow-downward-line",
	});
}

export default Component;

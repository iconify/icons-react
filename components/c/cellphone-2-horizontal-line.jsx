import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-1j1wbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-1j1wbed"/>`,
		"fallback": "mingcute:cellphone-2-horizontal-line",
	});
}

export default Component;

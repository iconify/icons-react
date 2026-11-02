import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4zwch5ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4zwch5ns"/>`,
		"fallback": "mingcute:heater-fill",
	});
}

export default Component;

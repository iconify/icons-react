import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okfw9lw1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okfw9lw1v"/>`,
		"fallback": "mingcute:grid-2x2-check-fill",
	});
}

export default Component;

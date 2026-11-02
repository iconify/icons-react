import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebb0qcc0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebb0qcc0t"/>`,
		"fallback": "mingcute:bottle-glass-line",
	});
}

export default Component;

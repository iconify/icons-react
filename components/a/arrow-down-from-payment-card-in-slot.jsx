import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_3x2pb0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_3x2pb0c"/>`,
		"fallback": "pinhead:arrow-down-from-payment-card-in-slot",
	});
}

export default Component;

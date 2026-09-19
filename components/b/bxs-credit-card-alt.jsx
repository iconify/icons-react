import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb68hrb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb68hrb_i"/>`,
		"fallback": "bx:bxs-credit-card-alt",
	});
}

export default Component;

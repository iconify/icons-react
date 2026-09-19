import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejaf2ub4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejaf2ub4s"/>`,
		"fallback": "bx:bxs-wallet",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da1z3qbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da1z3qbcx"/>`,
		"fallback": "mingcute:bill-2-fill",
	});
}

export default Component;

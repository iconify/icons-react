import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvxz9pb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvxz9pb3h"/>`,
		"fallback": "andrsrxn:cellular-network-3g",
	});
}

export default Component;

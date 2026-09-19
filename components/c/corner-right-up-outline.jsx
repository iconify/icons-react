import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbayqnbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbayqnbmi"/>`,
		"fallback": "eva:corner-right-up-outline",
	});
}

export default Component;

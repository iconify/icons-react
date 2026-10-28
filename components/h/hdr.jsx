import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne2zhwbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne2zhwbws"/>`,
		"fallback": "andrsrxn:hdr",
	});
}

export default Component;

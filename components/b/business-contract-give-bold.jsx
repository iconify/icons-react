import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oej-_gbmt.css';
import '../../css/e/ezxsfzb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oej-_gbmt"/><path class="ezxsfzb4s"/>`,
		"fallback": "streamline-ultimate:business-contract-give-bold",
	});
}

export default Component;

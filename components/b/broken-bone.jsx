import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbfv5kbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbfv5kbrr"/>`,
		"fallback": "hugeicons:broken-bone",
	});
}

export default Component;

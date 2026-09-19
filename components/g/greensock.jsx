import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfbuh_-3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfbuh_-3e"/>`,
		"fallback": "cib:greensock",
	});
}

export default Component;

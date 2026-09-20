import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuh36-brr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuh36-brr"/>`,
		"fallback": "streamline:hand-grab",
	});
}

export default Component;

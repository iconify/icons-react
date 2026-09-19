import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1gh51bdl.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1gh51bdl"/>`,
		"fallback": "zmdi:format-list-numbered",
	});
}

export default Component;

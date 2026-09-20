import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnwj53bsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnwj53bsd"/>`,
		"fallback": "selfhst:audible-light",
	});
}

export default Component;

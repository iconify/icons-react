import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncolsybxr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncolsybxr"/>`,
		"fallback": "fa6-regular:handshake",
	});
}

export default Component;

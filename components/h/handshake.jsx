import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em0tpcb6k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em0tpcb6k"/>`,
		"fallback": "fa-solid:handshake",
	});
}

export default Component;

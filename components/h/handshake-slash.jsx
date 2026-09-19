import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ox3b4ub.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ox3b4ub"/>`,
		"fallback": "fa7-solid:handshake-slash",
	});
}

export default Component;

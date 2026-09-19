import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shflob6rn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shflob6rn"/>`,
		"fallback": "fa6-solid:handshake",
	});
}

export default Component;

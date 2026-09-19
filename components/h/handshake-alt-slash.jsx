import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkgh3ntpc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkgh3ntpc"/>`,
		"fallback": "fa-solid:handshake-alt-slash",
	});
}

export default Component;

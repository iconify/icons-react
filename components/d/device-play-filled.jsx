import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7i0xybwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p7i0xybwx"/>`,
		"fallback": "ix:device-play-filled",
	});
}

export default Component;

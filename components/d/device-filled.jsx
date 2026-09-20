import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjpnycbdq.css';
import '../../css/p/pgrdi5beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjpnycbdq"/><path class="pgrdi5beg"/>`,
		"fallback": "tdesign:device-filled",
	});
}

export default Component;

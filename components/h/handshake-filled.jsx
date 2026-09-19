import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxjj8npel.css';
import '../../css/l/l2afcqtvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxjj8npel"/><path class="l2afcqtvn"/>`,
		"fallback": "boxicons:handshake-filled",
	});
}

export default Component;

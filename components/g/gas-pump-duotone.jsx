import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0qr0xbqv.css';
import '../../css/w/wbptk0jjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0qr0xbqv secondary"/><path class="primary wbptk0jjb"/></g>`,
		"fallback": "iconaut:gas-pump-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cygiloihl.css';
import '../../css/w/wc2xakonk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cygiloihl"/><path class="wc2xakonk"/>`,
		"fallback": "bx:bxl-discord",
	});
}

export default Component;

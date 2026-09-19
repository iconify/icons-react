import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxyw-hbts.css';
import '../../css/o/o0pkr5bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxyw-hbts"/><path class="o0pkr5bpt"/>`,
		"fallback": "bx:bx-exit",
	});
}

export default Component;

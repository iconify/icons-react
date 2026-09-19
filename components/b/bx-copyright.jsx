import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0h_kbs6z.css';
import '../../css/i/i10epfbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0h_kbs6z"/><path class="i10epfbks"/>`,
		"fallback": "bx:bx-copyright",
	});
}

export default Component;

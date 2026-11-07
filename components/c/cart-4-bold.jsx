import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atzp2n7qu.css';
import '../../css/y/yp-w5kbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atzp2n7qu"/><path clip-rule="evenodd" class="yp-w5kbir"/>`,
		"fallback": "solar:cart-4-bold",
	});
}

export default Component;

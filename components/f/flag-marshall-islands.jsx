import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/o/ozf5qkbdh.css';
import '../../css/v/v3uf0k-2l.css';
import '../../css/s/shgya_lin.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="ozf5qkbdh"/><path class="v3uf0k-2l"/><path class="shgya_lin"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-marshall-islands",
	});
}

export default Component;

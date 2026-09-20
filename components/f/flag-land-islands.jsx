import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/t/tqpwn-bcn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="tqpwn-bcn"/><g><path class="qy525jbwx"/></g>`,
		"fallback": "openmoji:flag-land-islands",
	});
}

export default Component;

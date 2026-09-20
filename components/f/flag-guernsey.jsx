import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/e/e5k9t83zt.css';
import '../../css/w/w0zhbl1ga.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="e5k9t83zt"/><path class="w0zhbl1ga"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-guernsey",
	});
}

export default Component;

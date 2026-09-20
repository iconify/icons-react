import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/d/dwa4h_bdu.css';
import '../../css/e/evod7b8wu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="dwa4h_bdu"/><path class="evod7b8wu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-nauru",
	});
}

export default Component;

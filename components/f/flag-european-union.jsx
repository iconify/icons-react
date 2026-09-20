import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/h/hjc6v1b6h.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="hjc6v1b6h"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-european-union",
	});
}

export default Component;

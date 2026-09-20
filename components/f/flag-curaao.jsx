import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/k/kxwpsgb3y.css';
import '../../css/m/mwd0dodcu.css';
import '../../css/q/qhkx3jbxs.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="kxwpsgb3y"/><path class="mwd0dodcu"/><path class="qhkx3jbxs"/><g><path class="qy525jbwx"/></g>`,
		"fallback": "openmoji:flag-curaao",
	});
}

export default Component;

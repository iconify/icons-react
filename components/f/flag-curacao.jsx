import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/k/kxwpsgb3y.css';
import '../../css/k/ki44jwtao.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="kxwpsgb3y"/><path class="ki44jwtao"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-curacao",
	});
}

export default Component;

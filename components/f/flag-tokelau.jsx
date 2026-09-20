import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/a/a6286m-rr.css';
import '../../css/v/v026-rbui.css';
import '../../css/v/vpjs_2r9t.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="a6286m-rr"/><path class="v026-rbui"/><path class="vpjs_2r9t"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-tokelau",
	});
}

export default Component;

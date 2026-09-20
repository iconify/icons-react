import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/c/c2j3pfqwl.css';
import '../../css/e/exy3993hn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="c2j3pfqwl"/><path class="exy3993hn"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-maldives",
	});
}

export default Component;

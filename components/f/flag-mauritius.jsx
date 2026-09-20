import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/e/ewnlplbvw.css';
import '../../css/p/pfo-r6bra.css';
import '../../css/i/iybas7bah.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="ewnlplbvw"/><path class="pfo-r6bra"/><path class="iybas7bah"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-mauritius",
	});
}

export default Component;

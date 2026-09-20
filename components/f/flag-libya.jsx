import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/m/mwvy86cpv.css';
import '../../css/p/p7sp9c2lz.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="e_6_n4b0n"/><path class="mwvy86cpv"/><path class="p7sp9c2lz"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-libya",
	});
}

export default Component;

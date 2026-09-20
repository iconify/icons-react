import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/a/a8zg1pdpv.css';
import '../../css/r/re8ja9hrc.css';
import '../../css/u/u-ar4fbhp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="a8zg1pdpv"/><path class="re8ja9hrc"/><circle class="u-ar4fbhp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-namibia",
	});
}

export default Component;

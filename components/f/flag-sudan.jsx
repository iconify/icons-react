import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/n/njwtk9bwg.css';
import '../../css/e/e_6_n4b0n.css';
import '../../css/b/bjo8q2blr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="njwtk9bwg"/><path class="e_6_n4b0n"/><path class="bjo8q2blr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-sudan",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/r/rjbrubc9r.css';
import '../../css/l/lrsn0qnqm.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="rjbrubc9r"/><path class="lrsn0qnqm"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:bretagne-flag",
	});
}

export default Component;

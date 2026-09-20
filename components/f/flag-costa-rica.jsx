import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/p/pc12jfbcp.css';
import '../../css/d/drj_-7bvk.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="pc12jfbcp"/><path class="drj_-7bvk"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-costa-rica",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e8g5jgh4j.css';
import '../../css/s/su506mz2n.css';
import '../../css/q/qq170vruv.css';
import '../../css/r/rz2u8kbcv.css';
import '../../css/l/l5-yuj_nw.css';
import '../../css/d/d2y19yxio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e8g5jgh4j wm-shadow"/><path class="su506mz2n wm-shadow"/><path class="qq170vruv"/><path class="rz2u8kbcv"/><path class="l5-yuj_nw"/><path class="d2y19yxio"/></g>`,
		"fallback": "withicons-brutal:candy-corn",
	});
}

export default Component;

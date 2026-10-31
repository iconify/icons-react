import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/usg3cfh9t.css';
import '../../css/r/r7uws0-lq.css';
import '../../css/f/f0g3g2bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="usg3cfh9t wm-shadow"/><path class="r7uws0-lq wm-shadow"/><path class="f0g3g2bxk"/></g>`,
		"fallback": "withicons-brutal:chart-bar-increasing",
	});
}

export default Component;

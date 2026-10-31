import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hhv12y3up.css';
import '../../css/q/qok006pqr.css';
import '../../css/v/vqeyk70cs.css';
import '../../css/b/bmpq50y2d.css';
import '../../css/a/a0kbb-b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hhv12y3up wm-shadow"/><path class="qok006pqr wm-shadow"/><path class="vqeyk70cs"/><path class="bmpq50y2d"/><path class="a0kbb-b8t wm-s"/></g>`,
		"fallback": "withicons-brutal:bell-ring",
	});
}

export default Component;

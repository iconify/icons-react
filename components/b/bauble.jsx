import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i2ingpocw.css';
import '../../css/g/gtaltlbpz.css';
import '../../css/t/tsb2oy94r.css';
import '../../css/q/qjtlu2boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i2ingpocw wm-shadow"/><path class="gtaltlbpz wm-shadow"/><path class="tsb2oy94r"/><path class="qjtlu2boe"/></g>`,
		"fallback": "withicons-brutal:bauble",
	});
}

export default Component;

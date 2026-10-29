import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/ti5x8ytcl.css';
import '../../css/y/y54jm9wsc.css';
import '../../css/r/r7wzk5wqt.css';
import '../../css/q/qh-wm2bcn.css';
import '../../css/x/xzn0zfbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ti5x8ytcl wm-deco"/><path class="wm-deco y54jm9wsc"/><path class="r7wzk5wqt wm-k"/><path class="qh-wm2bcn wm-a"/><path class="wm-a xzn0zfbqz"/></g>`,
		"fallback": "withicons:chart-bar-decreasing-blueprint",
	});
}

export default Component;

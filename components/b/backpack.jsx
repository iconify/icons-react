import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iza-y7bpx.css';
import '../../css/l/lxthf7buy.css';
import '../../css/q/qwj_9ub9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iza-y7bpx"/><path class="lxthf7buy"/><path class="qwj_9ub9p"/></g>`,
		"fallback": "streamline-color:backpack",
	});
}

export default Component;

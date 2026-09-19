import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-yawdb2x.css';
import '../../css/j/j5cb_7bdt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-yawdb2x"/><path class="j5cb_7bdt"/>`,
		"fallback": "cil:battery-alert",
	});
}

export default Component;

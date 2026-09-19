import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgcmxccix.css';
import '../../css/x/xlramcbzi.css';

const viewBox = {"width":30,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgcmxccix"/><path class="xlramcbzi"/></g>`,
		"fallback": "et:alarmclock",
	});
}

export default Component;

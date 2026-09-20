import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv7riac2w.css';
import '../../css/y/yawgs7bke.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rv7riac2w"/><path class="yawgs7bke"/></g>`,
		"fallback": "streamline-color:hearts-symbol",
	});
}

export default Component;

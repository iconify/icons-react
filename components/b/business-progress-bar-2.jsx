import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1-uyxkjp.css';
import '../../css/h/hwm1ycbag.css';
import '../../css/g/gigov-brk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1-uyxkjp"/><path class="hwm1ycbag"/><path class="gigov-brk"/></g>`,
		"fallback": "streamline-color:business-progress-bar-2",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zry9cs7xo.css';
import '../../css/t/tf2s-1bfk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zry9cs7xo"/><path class="tf2s-1bfk"/></g>`,
		"fallback": "streamline-color:expand-window-2-flat",
	});
}

export default Component;

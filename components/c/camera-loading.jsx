import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wl_zx02mu.css';
import '../../css/t/tjcqu8l6p.css';
import '../../css/d/dzph-dble.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wl_zx02mu"/><path class="tjcqu8l6p"/><path class="dzph-dble"/></g>`,
		"fallback": "streamline-color:camera-loading",
	});
}

export default Component;

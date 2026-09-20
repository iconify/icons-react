import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urvb9ca6d.css';
import '../../css/n/n797-hw_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="urvb9ca6d"/><path class="n797-hw_i"/></g>`,
		"fallback": "tdesign:flight-takeoff",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c24k95k2y.css';
import '../../css/q/qgfdvcbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c24k95k2y"/><path class="qgfdvcbmi"/></g>`,
		"fallback": "majesticons:headset",
	});
}

export default Component;

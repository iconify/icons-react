import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd0r3qbhp.css';
import '../../css/b/bkuv6nbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd0r3qbhp"/><path class="bkuv6nbgc"/></g>`,
		"fallback": "streamline-freehand-color:controls-slider-toggle-left",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bld1b2bze.css';
import '../../css/e/e8epwwblk.css';
import '../../css/m/mxf0qmb4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bld1b2bze"/><path class="e8epwwblk"/><path class="mxf0qmb4d"/></g>`,
		"fallback": "streamline-color:controller",
	});
}

export default Component;

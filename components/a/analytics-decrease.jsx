import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/j/j3dz97r7p.css';
import '../../css/c/c9yqeebif.css';
import '../../css/e/emurol-3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="j3dz97r7p"/><path class="c9yqeebif"/><path class="emurol-3o"/></g>`,
		"fallback": "andrsrxn:analytics-decrease",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxytg9p0m.css';
import '../../css/n/nw1233orn.css';
import '../../css/k/knl7_p19e.css';
import '../../css/a/ae3zbg33n.css';
import '../../css/h/hxn_aj1ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nxytg9p0m"/><path class="nw1233orn"/><path class="knl7_p19e"/><path class="ae3zbg33n"/><path class="hxn_aj1ge"/></g>`,
		"fallback": "streamline-freehand-color:design-tool-pen-pencil-brush",
	});
}

export default Component;

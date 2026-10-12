import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnts1mbfb.css';
import '../../css/c/c8vjbmb6l.css';
import '../../css/o/o0c09q5sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tnts1mbfb"/><path class="c8vjbmb6l"/><path class="o0c09q5sk"/></g>`,
		"fallback": "andrsrxn:airplane-takeoff",
	});
}

export default Component;

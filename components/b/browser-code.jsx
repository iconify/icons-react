import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1a_c4b8q.css';
import '../../css/d/drc3oubtr.css';
import '../../css/g/ghdp9dbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1a_c4b8q"/><path class="drc3oubtr"/><path class="ghdp9dbhc"/></g>`,
		"fallback": "andrsrxn:browser-code",
	});
}

export default Component;

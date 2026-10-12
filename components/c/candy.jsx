import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odc_d4b3c.css';
import '../../css/m/muztcob2w.css';
import '../../css/w/w9mw1mb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odc_d4b3c"/><path class="muztcob2w"/><path class="w9mw1mb1s"/></g>`,
		"fallback": "andrsrxn:candy",
	});
}

export default Component;

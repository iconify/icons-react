import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0ld87yxf.css';
import '../../css/v/vl-konbub.css';
import '../../css/x/xh1w_9b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0ld87yxf"/><path class="vl-konbub"/><path class="xh1w_9b6x"/></g>`,
		"fallback": "andrsrxn:drop-off",
	});
}

export default Component;

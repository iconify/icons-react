import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysh0rlbce.css';
import '../../css/q/q1yxl1rgc.css';
import '../../css/m/m_aatt6fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysh0rlbce"/><path class="q1yxl1rgc"/><path class="m_aatt6fu"/></g>`,
		"fallback": "andrsrxn:file-minus",
	});
}

export default Component;

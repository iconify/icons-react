import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq3okyt3m.css';
import '../../css/h/hec4_bb-a.css';
import '../../css/i/im29qtbzp.css';
import '../../css/f/faejh19lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zq3okyt3m"/><path class="hec4_bb-a"/><path class="im29qtbzp"/><path class="faejh19lf"/></g>`,
		"fallback": "andrsrxn:agent-swap",
	});
}

export default Component;

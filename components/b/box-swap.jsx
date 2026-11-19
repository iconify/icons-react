import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hec4_bb-a.css';
import '../../css/d/d-2w6k7xp.css';
import '../../css/d/dgnqgobjw.css';
import '../../css/g/g2-jjcbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hec4_bb-a"/><path class="d-2w6k7xp"/><path class="dgnqgobjw"/><path class="g2-jjcbdc"/></g>`,
		"fallback": "andrsrxn:box-swap",
	});
}

export default Component;

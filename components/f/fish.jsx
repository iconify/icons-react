import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9820actr.css';
import '../../css/h/hazzuka2l.css';
import '../../css/q/q4kgps97f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9820actr"/><path class="hazzuka2l"/><path class="q4kgps97f"/></g>`,
		"fallback": "andrsrxn:fish",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/a/atfj8bbhs.css';
import '../../css/y/y_5hmkbzk.css';
import '../../css/j/j1oqxebwh.css';
import '../../css/g/g1rigr9jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn436cvro"/><circle transform="rotate(90 12 12)" class="atfj8bbhs"/><circle transform="rotate(90 12 12)" class="y_5hmkbzk"/><path class="j1oqxebwh"/><path class="g1rigr9jp"/></g>`,
		"fallback": "andrsrxn:face-scan",
	});
}

export default Component;

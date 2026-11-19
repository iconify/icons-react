import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgloxx66r.css';
import '../../css/q/q2clqub3k.css';
import '../../css/t/tn62aexqc.css';
import '../../css/d/dq84scb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fgloxx66r"/><path class="q2clqub3k"/><path class="tn62aexqc"/><path class="dq84scb0i"/></g>`,
		"fallback": "andrsrxn:file-user",
	});
}

export default Component;

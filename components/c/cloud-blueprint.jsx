import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/waos4ubra.css';
import '../../css/r/rm6k7ob7j.css';
import '../../css/a/ab7bixb3l.css';
import '../../css/q/q2zxisdlc.css';
import '../../css/x/x8nxfie8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="waos4ubra wm-deco"/><path class="rm6k7ob7j wm-deco"/><path class="ab7bixb3l wm-deco"/><path class="q2zxisdlc"/><path class="x8nxfie8y"/></g>`,
		"fallback": "withicons:cloud-blueprint",
	});
}

export default Component;

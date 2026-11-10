import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz4l92b3x.css';
import '../../css/l/ld1a3dbnb.css';
import '../../css/r/rwg5m13ar.css';
import '../../css/g/gumqc9euk.css';
import '../../css/x/x4zhyxbay.css';
import '../../css/s/sh-eo5bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz4l92b3x"/><path class="ld1a3dbnb"/><circle class="rwg5m13ar"/><circle class="gumqc9euk"/><ellipse class="x4zhyxbay"/><path class="sh-eo5bhv"/></g>`,
		"fallback": "andrsrxn:browser-globe",
	});
}

export default Component;

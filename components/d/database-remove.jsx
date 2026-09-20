import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efhtg0b9p.css';
import '../../css/d/diusqeb6m.css';
import '../../css/c/cc9zl-3qc.css';
import '../../css/r/rr5q5cczm.css';
import '../../css/x/x67u_0bjj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="efhtg0b9p"/><path class="diusqeb6m"/><path class="cc9zl-3qc"/><path class="rr5q5cczm"/><path class="x67u_0bjj"/></g>`,
		"fallback": "streamline-color:database-remove",
	});
}

export default Component;

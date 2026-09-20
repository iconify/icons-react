import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1pxt3bbp.css';
import '../../css/m/mnaoluazb.css';
import '../../css/p/pjhepfsat.css';
import '../../css/x/xhxn38b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q1pxt3bbp"/><path class="mnaoluazb"/><path class="pjhepfsat"/><path class="xhxn38b-b"/></g>`,
		"fallback": "streamline-freehand-color:analytics-graph-line-triple",
	});
}

export default Component;

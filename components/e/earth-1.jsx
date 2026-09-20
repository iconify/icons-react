import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw8p2oi9f.css';
import '../../css/j/jd4u2jbej.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/q-fg43bcc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jw8p2oi9f"/><path clip-rule="evenodd" class="jd4u2jbej"/><path class="xjfc-xbtr"/><path class="q-fg43bcc"/></g>`,
		"fallback": "streamline-color:earth-1",
	});
}

export default Component;

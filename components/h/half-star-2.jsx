import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u9_q4t0ha.css';
import '../../css/c/cjo35jp_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="u9_q4t0ha"/><path class="cjo35jp_h"/></g>`,
		"fallback": "streamline-plump:half-star-2",
	});
}

export default Component;

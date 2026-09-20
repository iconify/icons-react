import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk9dbib7n.css';
import '../../css/x/xjguwe2_c.css';
import '../../css/s/s51lqybrs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gk9dbib7n"/><path class="xjguwe2_c"/><path class="s51lqybrs"/></g>`,
		"fallback": "streamline-color:hierarchy-2",
	});
}

export default Component;

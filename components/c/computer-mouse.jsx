import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji63zhrdl.css';
import '../../css/c/cs7zjhbrw.css';
import '../../css/j/jomwdcxqo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o_d7gwb7s.css';
import '../../css/s/s51fiv1hv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji63zhrdl"/><path class="cs7zjhbrw"/><path class="jomwdcxqo"/><g class="jn8qy4bru"><path class="o_d7gwb7s"/><path class="s51fiv1hv"/></g>`,
		"fallback": "openmoji:computer-mouse",
	});
}

export default Component;

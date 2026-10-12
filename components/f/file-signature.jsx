import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/b/b1hz9obnp.css';
import '../../css/k/kt6q7bbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="b1hz9obnp"/><path class="kt6q7bbrw"/></g>`,
		"fallback": "andrsrxn:file-signature",
	});
}

export default Component;

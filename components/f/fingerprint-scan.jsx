import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs4z_3ftf.css';
import '../../css/q/qczxqyhuq.css';
import '../../css/y/yo98lpb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vs4z_3ftf"/><path class="qczxqyhuq"/><path class="yo98lpb3w"/></g>`,
		"fallback": "andrsrxn:fingerprint-scan",
	});
}

export default Component;

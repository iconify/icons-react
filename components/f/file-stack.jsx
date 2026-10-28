import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxn5o4jms.css';
import '../../css/f/ff1k3j4al.css';
import '../../css/m/mdhza1byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxn5o4jms"/><path class="ff1k3j4al"/><path class="mdhza1byh"/></g>`,
		"fallback": "andrsrxn:file-stack",
	});
}

export default Component;

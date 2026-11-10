import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m76y4kbws.css';
import '../../css/m/m6qe8lbcd.css';
import '../../css/m/mf3epfk8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m76y4kbws"/><path class="m6qe8lbcd"/><path class="mf3epfk8l"/></g>`,
		"fallback": "andrsrxn:file-raw",
	});
}

export default Component;

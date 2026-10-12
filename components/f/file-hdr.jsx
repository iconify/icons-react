import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlzx3bb9r.css';
import '../../css/m/m3ibmtbcq.css';
import '../../css/q/qobfjoi4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jlzx3bb9r"/><path class="m3ibmtbcq"/><path class="qobfjoi4c"/></g>`,
		"fallback": "andrsrxn:file-hdr",
	});
}

export default Component;

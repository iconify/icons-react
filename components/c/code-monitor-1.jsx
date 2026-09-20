import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smgf3k94c.css';
import '../../css/u/ucde5db9d.css';
import '../../css/q/qac3_kbgx.css';
import '../../css/b/bv4mmacvt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="smgf3k94c"/><path class="ucde5db9d"/><path class="qac3_kbgx"/><path class="bv4mmacvt"/></g>`,
		"fallback": "streamline-flex-color:code-monitor-1",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp3f52brw.css';
import '../../css/s/sh_ep79bw.css';
import '../../css/n/nvgxfpbnc.css';
import '../../css/v/vliabebqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lp3f52brw"/><path class="sh_ep79bw"/><path class="nvgxfpbnc"/><path class="vliabebqy"/></g>`,
		"fallback": "andrsrxn:face-sleep",
	});
}

export default Component;

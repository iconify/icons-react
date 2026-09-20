import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a846vxblv.css';
import '../../css/y/ystc6lbdp.css';
import '../../css/v/vqr-wvbtr.css';
import '../../css/e/e3hdqibed.css';
import '../../css/i/i-03ipccj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a846vxblv"/><path class="ystc6lbdp"/><path clip-rule="evenodd" class="vqr-wvbtr"/><path class="e3hdqibed"/><path class="i-03ipccj"/></g>`,
		"fallback": "streamline-plump-color:bug-virus-browser-flat",
	});
}

export default Component;

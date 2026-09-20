import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-xv4_bra.css';
import '../../css/a/aq36ptbrf.css';
import '../../css/r/rhk9x3dmx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-xv4_bra"/><path class="aq36ptbrf"/><path class="rhk9x3dmx"/></g>`,
		"fallback": "streamline-flex-color:customer-support-5",
	});
}

export default Component;

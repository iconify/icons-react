import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxm22-bpx.css';
import '../../css/u/umiyufmzm.css';
import '../../css/w/w6-f7fbch.css';
import '../../css/i/iodcr_bpu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sxm22-bpx"/><path class="umiyufmzm"/><path class="w6-f7fbch"/><path class="iodcr_bpu"/></g>`,
		"fallback": "streamline-color:browser-check",
	});
}

export default Component;

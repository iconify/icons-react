import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wa5y1pppq.css';
import '../../css/p/pv46_kizc.css';
import '../../css/j/jxl67pbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wa5y1pppq"/><path class="pv46_kizc"/><circle class="jxl67pbry"/></g>`,
		"fallback": "majesticons:chat-status-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g0xhpib8o.css';
import '../../css/p/pbq_mpbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g0xhpib8o wm-k"/><path class="pbq_mpbjf wm-a"/></g>`,
		"fallback": "withicons:chart-gantt-gloss",
	});
}

export default Component;

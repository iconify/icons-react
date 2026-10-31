import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kzzq1tbzo.css';
import '../../css/r/rwbpq1_1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kzzq1tbzo wm-k"/><path class="rwbpq1_1x wm-a"/></g>`,
		"fallback": "withicons:circle-dot-gloss",
	});
}

export default Component;
